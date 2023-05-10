import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Check if all the required fields are present
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a nodemailer transport object
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'keno.a89@gmail.com',
      pass: 'okqidsnvelleumgs',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Create the email message
  const mailOptions = {
    from: email,
    to: 'keno.a89@gmail.com',
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
