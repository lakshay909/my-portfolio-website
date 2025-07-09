// server/routes/contact.js

const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email from .env
            pass: process.env.EMAIL_PASS  // Your app password from .env
        }
    });

    // Set up email data
    const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's name and email
        to: process.env.EMAIL_USER,    // The email address that will receive the message (your email)
        subject: `Contact Form: ${subject}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong.');
        }
        res.status(200).send('Message sent successfully!');
    });
});

module.exports = router;