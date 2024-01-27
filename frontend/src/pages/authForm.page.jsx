import { Link } from "react-router-dom";
import googleicon from "../assets/google.png";
import InputComponent from "../components/common/input.component";
import AnimationWraper from "../common/animation/animationWraper";
import { useFormik } from "formik";
import { formValidation } from "../common/schema/formValidation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../common/context/authContextProvider";
import { storeInSession } from "../common/session/session";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ pgName }) => {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const userAuthToServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER + serverRoute, formData)
      .then(({ data }) => {
        storeInSession("userToken", JSON.stringify(data));
        setAuthUser(data);
        toast.success("Successful");
        navigate("/editor");
      })
      .catch(({ response }) => {
        console.log(response);
        toast.error(response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger validation
    formik.validateForm().then((errors) => {
      // If the errors object is not empty, prevent form submission
      if (pgName === "login" && Object.keys(errors).length > 2) {
        console.log(pgName === "login");
        console.log(Object.keys(errors).length);
        toast.error("Please fill all required fields1");
        return;
      } else if (pgName === "register" && Object.keys(errors).length > 0) {
        toast.error("Please fill all required fields2");
        return;
      }

      const serverRoute = pgName === "login" ? "/login" : "/register";
      const form = new FormData(authForm);
      const formData = {};
      for (let [key, value] of form.entries()) {
        formData[key] = value;
      }

      userAuthToServer(serverRoute, formData);
    });
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: formValidation,
  });
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <AnimationWraper key={pgName}>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-10">
        <Toaster />
        <form id="authForm" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-semibold text-center mb-16">
            {pgName === "login" ? "Welcome Back" : "Create an Account"}
          </h1>
          {pgName === "login" ? null : (
            <InputComponent
              type="text"
              name="fullname"
              placeholder="Full Name"
              icon="user"
              value={values.fullname}
              onchange={handleChange}
              onblur={handleBlur}
              error={errors.fullname}
              touched={touched.fullname}
            />
          )}
          <InputComponent
            type="email"
            name="email"
            placeholder="Email"
            icon="envelope"
            value={values.email}
            onchange={handleChange}
            onblur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputComponent
            type="password"
            name="password"
            placeholder="Password"
            icon="key"
            value={values.password}
            onchange={handleChange}
            onblur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
          {pgName === "login" ? null : (
            <InputComponent
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              icon="lock"
              value={values.confirmpassword}
              onchange={handleChange}
              onblur={handleBlur}
              error={errors.confirmpassword}
              touched={touched.confirmpassword}
            />
          )}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-black text-white rounded-full py-3 mt-8 hover:bg-opacity-80"
          >
            {pgName === "login" ? "Login with Email" : "Register with Email"}
          </button>

          <div className="relative w-full flex items-center gap-2 my-10 opacity-20 text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>OR</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="flex items-center justify-center  gap-4 w-full bg-black py-3 px-6 rounded-full text-white">
            <img src={googleicon} alt="google icon" className="w-5" />
            Continue with Google
          </button>
          {pgName === "login" ? (
            <p className="text-center mt-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-black font-bold hover:underline"
              >
                Register
              </Link>
            </p>
          ) : (
            <p className="text-center mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-black font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWraper>
  );
};

export default AuthForm;
