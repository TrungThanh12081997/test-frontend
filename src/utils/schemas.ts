/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const regexEmailBefore = /^([a-zA-Z0-9]{1,50}@)/;
const regexEmailAfter = /@([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]){1,50}$/;
const regexPassword = /^[a-zA-Z0-9]*$/;
// export const formRegisterSchema = yup.object({
//     fullName: yup.string().required("Vui lòng nhập họ tên"),
//     content: yup.string(),
//     message: yup.string().required("Vui lòng nhập lý do"),
//     phone: yup
//         .string()
//         .required("Vui lòng nhập số điện thoại")
//         .matches(regexPhone, "Số điện thoại không hợp lệ"),
//     email: yup
//         .string()
//         .required("Please fill email")
//         .email("Email must be a valid email")
//         .max(50, "Email must be at most 50 characters long")
//         .required("Email is required")
//         .matches(regexEmailBefore, "Before @ is not longer than 50 character")
//         .matches(regexEmailAfter, "After @ is not longer than 50 characters"),
//     password: yup.string().required("Vui lòng chọn giới tính"),
//     // gender: yup.string().required("Vui lòng chọn giới tính"),
// });
export const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be a valid email")
        .max(50, "Email must be at most 50 characters long")
        .required("Email is required")
        .matches(regexEmailBefore, "Before @ is not longer than 50 character")
        .matches(regexEmailAfter, "After @ is not longer than 50 characters"),
    name: yup
        .string()
        .matches(/^[A-Za-z]+$/, "Name must only contain alphabetic characters")
        .max(50, "Name must be at most 50 characters long")
        .required("Name is required"),
    password: yup
        .string()
        .matches(regexPassword, "Password must not contain special characters")
        .max(8, "Password must be at most 8 characters long")
        .required("Password is required"),
});

export default undefined;
