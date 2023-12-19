import { Link } from "react-router-dom";
import googleicon from "../assets/google.png";
import InputComponent from "../components/input.component";
import AnimationWraper from "../common/animationWraper";
import { useFormik } from "formik";
import { formValidation } from "../common/schema/formValidation";
const AuthForm = ({ pgName }) => {
    const { handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirmpassword: "",
        },
        validationSchema: formValidation,
    });

    // console.log(values);
    // console.log(errors);
    // console.log(touched);
    return (
        <AnimationWraper key={pgName}>
            <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-10">
                <form action="" className="w-[80%] max-w-[400px]">
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
