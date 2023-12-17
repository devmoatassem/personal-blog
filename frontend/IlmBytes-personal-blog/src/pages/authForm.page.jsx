import { Link } from "react-router-dom";
import googleicon from "../assets/google.png";
import InputComponent from "../components/input.component";
const AuthForm = ({ pgName }) => {
    return (
        <>
            <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-10">
                <form action="" className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-semibold text-center mb-16">
                        {pgName === "login" ? "Welcome Back" : "Create an Account"}
                    </h1>
                    {pgName === "login" ? null : (
                        <InputComponent type="text" name="fullname" placeholder="Full Name" icon="user" />
                    )
                    }
                    <InputComponent type="email" name="email" placeholder="Email" icon="envelope" />
                    <InputComponent type="password" name="password" placeholder="Password" icon="key" />
                    {pgName === "login" ? null : (
                        <InputComponent type="password" name="confirmpassword" placeholder="Confirm Password" icon="lock" />
                    )
                    }
                    <button type="submit" className="w-full bg-black text-white rounded-full py-3 mt-8 hover:bg-opacity-80">
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
                    {
                        pgName === "login" ? (
                            <p className="text-center mt-8">
                                Don't have an account? <Link to="/register" className="text-black font-bold hover:underline">Register</Link>
                            </p>
                        ) : (
                            <p className="text-center mt-8">
                                Already have an account? <Link to="/login" className="text-black font-bold hover:underline">Login</Link>
                            </p>
                        )
                    }
                </form>
            </section>
        </>
    )
}

export default AuthForm;