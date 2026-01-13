const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_EMAIL_APP_PASSWORD'
  }
});

app.post('/send-link', (req, res) => {
  const { email } = req.body;

  // Here, you would verify the payment and then send the link
  // For now, we'll just send a test email
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: email,
    subject: 'Your Access Link',
    text: 'Here is your access link: [YOUR_PRODUCT_LINK]'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Link sent successfully!');
  });
});

app.listen(po
