import * as Yup from "yup";
import { isValidPhoneNumber } from "react-phone-number-input/input";

const contactSchema = Yup.object().shape({
  fullName: Yup.string().label("Full Name").min(5).max(100).required(),
  email: Yup.string().label("Email").email().required(),
  mobile: Yup.string()
    .label("Mobile")
    .required()
    .test(
      "phoneNumber",
      "${path} is not a valid phone number",
      value => !isNaN(value) && isValidPhoneNumber(value)
    ),
});

export default contactSchema;
