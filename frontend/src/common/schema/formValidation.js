import * as yup from "yup";

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
export const formValidation = yup.object().shape({
  fullname: yup.string().min(1).required("Please enter full name"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegex, {
      message:
        "Passowrd must have at least on digit, one lowercase letter, one uppercase letter and between 6-20 characters in length",
    })
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Please Confirm password"),
});
