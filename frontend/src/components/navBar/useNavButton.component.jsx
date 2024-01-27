import React, { useState, useContext } from "react";
import UserNavigation from "./user-navigation.component";
import { AuthContext } from "../../common/context/authContextProvider";
const UserNavButton = () => {
  const [userNav, setUserNav] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { acessToken, profile_img } = authUser;
  return (
    <div className="border-2 w-12 h-12 rounded-full relative">
      <button
        className=""
        onClick={() => {
          setUserNav(!userNav);
        }}
      >
        <img
          src={profile_img}
          alt="profile image"
          className="w-full h-full object-cover rounded-full"
        />
      </button>
      {userNav ? <UserNavigation /> : null}
    </div>
  );
};

export default UserNavButton;
