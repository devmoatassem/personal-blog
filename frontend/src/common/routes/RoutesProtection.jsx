import { Navigate, Outlet } from "react-router-dom";
import { getFromSession } from "../session/session";

const RoutesProtection = () => {
  // Important Note
  // /////////////////////////////////
  // Due to some random reason, I can't use authContext here
  // So I used session instead and it works
  // /////////////////////////////////
  // TO-DO: Try it with Redux and also try to figure out issue with authContext
  // Refrence Link: https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c
  const token = getFromSession("userToken");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default RoutesProtection;
