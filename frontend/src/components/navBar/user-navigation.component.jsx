import React, { useContext } from "react";
import AnimationWraper from "../../common/animation/animationWraper";
import { Link } from "react-router-dom";
import { AuthContext } from "../../common/context/authContextProvider";
import { removeFromSession } from "../../common/session/session";
const UserNavigation = () => {
  const linkClass =
    "text-gray-700 hover:text-black hover:bg-gray-200 p-3 px-4 block opacity-75";
  const {
    authUser: { username },
    setAuthUser,
  } = useContext(AuthContext);

  const logout = () => {
    removeFromSession("userToken");
    setAuthUser({ acessToken: null });
  };

  return (
    <AnimationWraper
      key={"UserNavigation"}
      transition={{ duration: 0.2 }}
      initial={{ y: 10 }}
    >
      <div className="flex flex-col absolute right-0 w-60 border border-gray-200 bg-white rounded-md">
        <Link to="/write" className={linkClass + " md:hidden"}>
          <button className="flex gap-2">
            <i className="fi fi-rr-file-edit mt-0.5"></i>Write
          </button>
        </Link>
        <Link to={`/user/${username}`} className={linkClass}>
          Profile
        </Link>
        <Link className={linkClass}>Dashboard</Link>
        <Link className={linkClass}>Settings</Link>
        <hr />
        <Link
          to="/login"
          className={linkClass + " flex items-center gap-3"}
          onClick={() => {
            logout();
          }}
        >
          <i className="fi fi-rr-exit mt-1 text-lg"></i>
          <div>
            <div className="font-bold">Logout</div>
            <div className="text-xs">{`@${username}`}</div>
          </div>
        </Link>
      </div>
    </AnimationWraper>
  );
};

export default UserNavigation;
