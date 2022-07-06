import Container from "components/shared/Container";
import Image from "next/image";
import classes from "./styles.module.scss";
import bgImage from "./background.png";
import Title from "components/shared/Title";
import TextInput from "components/shared/TextInput";
import Button from "components/shared/Button";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
};

const schema = Yup.object().shape({
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

const ContactSection = props => {
  const handleSubmit = async values => {
    console.log(values);
  };

  return (
    <section className={classes.root} {...props}>
      <div className={classes.bgWrapper}>
        <Image src={bgImage} layout="fill" objectFit="cover" />
      </div>
      <Container size="xl" className={classes.container}>
        <div className={classes.formWrapper}>
          <Title className={classes.title}>Contact Us</Title>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ errors, touched, values, setFieldValue, handleBlur }) => (
              <Form className={classes.form} noValidate>
                <Field
                  as={TextInput}
                  className={classes.input}
                  name="fullName"
                  label="Full Name"
                  errorMessage={touched.fullName && errors.fullName}
                />
                <TextInput
                  component={PhoneInput}
                  className={classes.input}
                  name="mobile"
                  label="Mobile"
                  value={values.mobile}
                  onChange={value => setFieldValue("mobile", value)}
                  onBlur={handleBlur}
                  errorMessage={touched.mobile && errors.mobile}
                />
                <Field
                  as={TextInput}
                  className={classes.input}
                  name="email"
                  type="email"
                  label="Email"
                  errorMessage={touched.email && errors.email}
                />
                <Button type="submit" className={classes.button}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
