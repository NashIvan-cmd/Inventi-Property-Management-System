import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // For testing with Gmail
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // your Gmail App Password
  },
});

/**
 * Send account activation email
 */
export async function sendActivationEmail(email: string, token: string) {
  const activationLink = `https://yourapp.com/activate?token=${token}`; // placeholder prefix

  const mailOptions = {
    from: `"Inventi Property Management" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Activate Your Account",
    text: `Click the following link to activate your account: ${activationLink}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Welcome to FIT Property Management System 🎉</h2>
        <p>Please click the button below to activate your account:</p>
        <a href="${activationLink}" target="_blank" 
          style="display:inline-block; padding:10px 20px; margin-top:15px;
                 background-color:#4CAF50; color:#fff; text-decoration:none;
                 border-radius:5px; font-weight:bold;">
          Activate Account
        </a>
        <p style="margin-top:20px;">Or copy and paste this link in your browser:</p>
        <p><a href="${activationLink}">${activationLink}</a></p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
