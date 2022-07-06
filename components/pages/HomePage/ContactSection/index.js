import { Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-number-input/input";
import Image from "next/image";
import Title from "components/shared/Title";
import TextInput from "components/shared/TextInput";
import Button from "components/shared/Button";
import Container from "components/shared/Container";
import contactSchema from "schemas/contactSchema";
import classes from "./styles.module.scss";
import bgImage from "./background.png";
import { useRef } from "react";

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
};

const ContactSection = props => {
  const formikRef = useRef();

  const handleSubmit = async data => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      alert(
        "Thank you for reaching out. I've got your message and will get back to you soon…"
      );
      return formikRef.current?.resetForm();
    }

    const responseText = await response.text();
    alert(`An error occurred while sending the email: ${responseText}`);
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
            validationSchema={contactSchema}
            innerRef={formikRef}
          >
            {({
              isSubmitting,
              errors,
              touched,
              values,
              setFieldValue,
              handleBlur,
            }) => (
              <Form className={classes.form} noValidate>
                <Field
                  as={TextInput}
                  className={classes.input}
                  name="fullName"
                  label="Full Name"
                  errorMessage={touched.fullName && errors.fullName}
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
                <Field
                  as={TextInput}
                  className={classes.input}
                  name="email"
                  type="email"
                  label="Email"
                  errorMessage={touched.email && errors.email}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className={classes.button}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
