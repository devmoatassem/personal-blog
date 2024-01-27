import Home from "../../pages/home.page";
import Editor from "../../pages/editor.page";
import AuthForm from "../../pages/authForm.page";
import PublishPage from "../../pages/publish.page";

export const routesList = [
  {
    path: "/",
    name: "Home",
    element: Home,
    props: {},
    isPrivate: false,
  },
  {
    path: "/login",
    name: "Login",
    element: AuthForm,
    props: { pgName: "login" },
    isPrivate: false,
  },
  {
    path: "/register",
    name: "Register",
    element: AuthForm,
    props: { pgName: "register" },
    isPrivate: false,
  },
  {
    path: "/editor",
    name: "Editor",
    element: Editor,
    props: {},
    isPrivate: true,
  },
  {
    path:"/publish",
    name:"Publish",
    element: PublishPage,
    props: {},
    isPrivate: true,
  }
];
