import logo from "../assets/blog-logo.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../common/context/authContextProvider";
import UserNavButton from "./navBar/useNavButton.component";
import SearchBox from "./navBar/searchBox.component";
import ActionButton from "./common/actionbutton.component";

const Navbar = ({ children }) => {
  const { authUser } = useContext(AuthContext);
  const { acessToken } = authUser;
  const navigate = useNavigate();
  return (
    <>
      <nav className="z-10 sticky top-0 flex items-center gap-12 w-full px-[5vw] py-5 h-[80px] border-b bg-white border-gray-200">
        <Link to="/" className="flex items-center text-3xl font-extrabold">
          <img src={logo} className="h-12 w-full" alt="logo" />
          <span>IlmBytes</span>
        </Link>

        <div className="flex items-center gap-1 md:gap-6 ml-auto">
          {children ? (
            children
          ) : (
            <>
              <SearchBox />
              {acessToken ? (
                <>
                  <Link to="/editor" className=" md:flex ">
                    <button className="hidden md:flex gap-2 hover:text-black hover:bg-gray-200 hover:rounded-md p-3 px-4 opacity-75">
                      <i className="fi fi-rr-file-edit mt-0.5"></i>Write
                    </button>
                  </Link>
                  <Link to={"/username/notification"}>
                    <button className="bg-gray-100 hover:bg-gray-200 w-12 h-12 text-black rounded-full flex items-center justify-center">
                      <i className="fi fi-rr-bell mt-1 text-lg"></i>
                    </button>
                  </Link>
                  <UserNavButton />
                </>
              ) : (
                <>
                  <ActionButton
                    text={"Login"}
                    handleClick={() => navigate("/login")}
                    customClass={"bg-black text-white"}
                  />
                  <ActionButton
                    text={"Register"}
                    handleClick={() => navigate("/register")}
                    customClass={"bg-gray-200 text-black hidden md:block"}
                  />
                </>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
