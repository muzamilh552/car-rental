import * as Yup from "yup";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}<>])[A-Za-z\d@$!%*?&#^()[\]{}<>]{8,}$/;
const phoneRegex = /^(?:\+92|0)?3\d{2}-?\d{7}$/;

export const signupSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "First name should be at least 2 characters")
        .max(25, "First name should be at most 25 characters")
        .required("Please enter your first name"),

    lastName: Yup.string()
        .min(2, "Last name should be at least 2 characters")
        .max(25, "Last name should be at most 25 characters")
        .required("Please enter your last name"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email"),

    phone: Yup.string()
        .matches(phoneRegex, "Phone number is not valid")
        .required("Please enter your phone number"),

    password: Yup.string()
        .matches(
            passwordRegex,
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
        )
        .required("Please enter your password"),

    confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
});

export const OTPVrification = Yup.object({
     email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email"),
})
export const loginSchema = Yup.object({
     email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email"),
       password: Yup.string()
        .matches(
            passwordRegex,
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
        )
        .required("Please enter your password"),  
})

export const UpDatePassword = Yup.object({
       password: Yup.string()
        .matches(
            passwordRegex,
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
        )
        .required("Please enter your password"),

    confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),  
})
