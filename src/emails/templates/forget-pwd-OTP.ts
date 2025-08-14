export const resetPwdOtp = (name: string, token: number) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Account - TAMSHYAH</title>
    <style>
      body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #ffffff;
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
      .logo-section {
          margin-bottom: 16px;
      }
      .logo-text {
          color: #374151;
          font-size: 18px;
          font-weight: 500;
          margin-right: 8px;
      }
      .logo-subtext {
          color: #374151;
          font-size: 14px;
          font-weight: 300;
          margin-right: 8px;
      }
      .logo-dots {
          display: inline-block;
          margin-left: 4px;
      }
      .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #FF7A6B;
          border-radius: 50%;
          margin: 0 1px;
      }
      .title {
          color: #FF7A6B;
          font-size: 24px;
          font-weight: normal;
          margin: 0;
      }
      .content {
          padding: 32px;
      }
      .greeting {
          color: #374151;
          font-size: 16px;
          margin-bottom: 16px;
      }
      .body-text {
          color: #374151;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
      }
      .otp-container {
          text-align: center;
          margin: 32px 0;
      }
      .otp-box {
          display: inline-block;
          background-color: #f9fafb;
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          padding: 24px 32px;
      }
      .otp-label {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 8px;
      }
      .otp-code {
          color: #1f2937;
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 4px;
          margin: 8px 0;
      }
      .otp-expiry {
          color: #9ca3af;
          font-size: 12px;
          margin-top: 8px;
      }
      .button-container {
          text-align: center;
          margin: 32px 0;
      }
      .verify-button {
          background-color: #FF7A6B;
          color: white;
          padding: 12px 32px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          display: inline-block;
          transition: background-color 0.3s;
      }
      .verify-button:hover {
          background-color: #FF6B5A;
      }
      .link-text {
          color: #374151;
          font-size: 14px;
          margin-bottom: 16px;
      }
      .verification-link {
          color: #2563eb;
          font-size: 14px;
          word-break: break-all;
          line-height: 1.5;
      }
      .security-notice {
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 16px;
          background-color: #f9fafb;
          margin: 32px 0;
      }
      .security-notice-text {
          color: #374151;
          font-size: 14px;
          margin: 0;
      }
      .footer-text {
          color: #374151;
          font-size: 16px;
          margin-bottom: 8px;
      }
      .team-name {
          color: #374151;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
      }
      .tagline {
          color: #9ca3af;
          font-size: 14px;
          font-style: italic;
          margin: 0;
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
      <!-- Header -->
        <div class="email-header">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bal-Shia-cSX3QLvwAtajAk9Cj0ak180iIxDAbP.png"
          alt="TAMSHYAH"
          class="logo"
          width="220"
        />
        <h1 style="color: #F47B6A; margin-top: 10px; font-size: 26px; font-weight: 600;">
          Your OTP
        </h1>
      </div>

      <!-- Content -->
      <div class="content">
        <p class="greeting">Hello ${name},</p>

        <p class="body-text">
          We received a request to verify your account for TAMSHYAH. Use the
          verification code below to complete your sign-in process.
        </p>

        <!-- OTP Code Display -->
        <div class="otp-container">
          <div class="otp-box">
            <div class="otp-label">Your verification code:</div>
            <div class="otp-code">${token}</div>
            <div class="otp-expiry">This code expires in 10 minutes</div>
          </div>
        </div>

        <p class="body-text">
          Enter this code in the app to verify your account and continue
          exploring the world with us.
        </p>

        <!-- Security Notice -->
        <div class="security-notice">
          <p class="security-notice-text">
            <strong>Security Notice:</strong> If you didn't request account
            verification, please ignore this email. Your account remains secure
            and no changes have been made.
          </p>
        </div>

        <p class="footer-text">Ready to explore again,</p>
        <p class="team-name">The TAMSHYAH Team</p>
        <p class="tagline">"Your next adventure awaits"</p>
      </div>
    </div>
  </body>
</html>
`;
};
