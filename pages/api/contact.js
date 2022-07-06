import sendGridMail from "@sendgrid/mail";
import contactSchema from "schemas/contactSchema";

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send();
  }

  return contactSchema
    .validate(req.body)
    .then(({ fullName, mobile, email }) => {
      return sendGridMail
        .send({
          to: process.env.SENDGRID_EMAIL_TO,
          from: process.env.SENDGRID_EMAIL_FROM,
          subject: "Contact Request",
          text: `Full Name: ${fullName}\nMobile: ${mobile}\nEmail: ${email}`,
        })
        .then(() => res.status(200).send())
        .catch(error => res.status(500).send(error.message));
    })
    .catch(error => res.status(422).send(error.message));
};

export default handler;
