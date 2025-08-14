import { urlFrontEnd } from "../../utils/baseUrl";

export const resetPasswordEmailTemplate = (name: string, token: string) => {
  const d = new Date().getFullYear();
  const resetLink = `${urlFrontEnd}/reset-password?token=${token}`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password - TAMSHYAH</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      }
      .email-header {
        background-color: #e3e3e3;
        color: #fff;
        padding: 30px 20px;
        text-align: center;
        
      }
      .logo {
        max-width: 220px;
        margin-bottom: 15px;
      }
      .email-body {
        padding: 40px 30px;
        color: #333;
        line-height: 1.6;
      }
      .reset-button {
        display: inline-block;
        background-color: #F47B6A;
        color: #ffffff !important;
        font-weight: bold;
        text-decoration: none;
        padding: 14px 35px;
        margin: 25px 0;
        border-radius: 6px;
        text-align: center;
        border: none;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
      }
      .reset-button:hover {
        background-color: #E56B5A;
      }
      .reset-link {
        word-break: break-all;
        color: #F47B6A;
        font-size: 14px;
        margin: 20px 0;
        padding: 15px;
        background-color: #f9f9f9;
        border-radius: 4px;
        border-left: 4px solid #F47B6A;
      }
      .email-footer {
        background-color: #e3e3e3;
        color: #000;
        padding: 30px 20px;
        text-align: center;
        font-size: 14px;
      }
      .social-icons {
        margin: 20px 0;
      }
      .social-icons a {
        display: inline-block;
        margin: 0 12px;
        text-decoration: none;
      }
      .social-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #000;
        padding: 8px;
        transition: background-color 0.3s ease;
      }
      .social-icon:hover {
        background-color: #000;
      }
      .footer-text {
        margin: 15px 0;
        color: #272423;
        font-size: 13px;
      }
      .footer-links {
        margin: 20px 0;
      }
      .footer-links a {
        color: #272423;
        text-decoration: none;
        margin: 0 15px;
        font-size: 14px;
      }
      .footer-links a:hover {
        text-decoration: underline;
      }
      .expiry-notice {
        font-style: italic;
        margin: 20px 0;
        color: #272423;
        font-size: 13px;
      }
      .contact-info {
        margin: 15px 0;
        color: #272423;
        font-size: 14px;
      }
      .contact-info a {
        color: #272423;
        text-decoration: none;
      }
      .contact-info a:hover {
        text-decoration: underline;
      }
      .security-notice {
        background-color: #fff3f0;
        border: 1px solid #F47B6A;
        border-radius: 6px;
        padding: 15px;
        margin: 20px 0;
        font-size: 14px;
        color: #333;
      }
      
      /* Responsive styles */
      @media only screen and (max-width: 600px) {
        .email-container {
          margin: 10px;
          border-radius: 0;
        }
        .email-body {
          padding: 25px 20px;
        }
        .email-header {
          padding: 25px 15px;
        }
        .logo {
          max-width: 180px;
        }
        .reset-button {
          width: 100%;
          padding: 16px 20px;
          font-size: 16px;
        }
        .social-icons a {
          margin: 0 8px;
        }
        .footer-links a {
          display: block;
          margin: 8px 0;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bal-Shia-cSX3QLvwAtajAk9Cj0ak180iIxDAbP.png"
          alt="TAMSHYAH"
          class="logo"
          width="220"
        />
        <h1 style="color: #F47B6A; margin-top: 10px; font-size: 26px; font-weight: 600;">
          Reset Your Password
        </h1>
      </div>

      <div class="email-body">
        <p style="font-size: 16px; margin-bottom: 20px;">Hello ${name},</p>

        <p style="margin-bottom: 20px;">
          We received a request to reset your password for your TAMSHYAH account.
        </p>

        <p style="margin-bottom: 25px;">
          Click the button below to create a new password and continue exploring the world with us.
        </p>

        <div style="text-align: center;">
          <a href="${resetLink}" class="reset-button">RESET MY PASSWORD</a>
        </div>

        <p style="margin: 25px 0 10px 0;">Or copy and paste this link into your browser:</p>
        <div class="reset-link">${resetLink}</div>

        <div class="security-notice">
          <strong>Security Notice:</strong> If you didn't request a password reset, please ignore this email. Your account remains secure and no changes have been made.
        </div>

        <p style="margin-top: 30px; margin-bottom: 5px;">
          Ready to explore again,<br />
          <strong>The TAMSHYAH Team</strong>
        </p>
        
        <p style="margin: 0; font-size: 14px; color: #777; font-style: italic;">
          "Your next adventure awaits"
        </p>
      </div>
    </div>
  </body>
</html>
`;
};
