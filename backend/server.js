var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;
const user = process.env.SMTP_USERNAME;
const pass = process.env.SMTP_PASSWORD;
const smtpHost = process.env.SMTP_HOST;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: 'http://localhost:8000',
  })
);

app.post('/submit-form', async (req, res) => {
  const { fullName, email, subject, message } = req.body;
  console.log(user, pass);

  // Check if all the required fields are present
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a nodemailer transport object
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Create the email message
  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL, // enter you're email here
    subject: subject,
    text: `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
