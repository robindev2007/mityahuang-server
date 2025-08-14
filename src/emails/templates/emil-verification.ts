import { urlFrontEnd } from "../../utils/baseUrl";

export const mailVerificationEmailTemplate = (name: string, token: string) => {
  const d = new Date().getFullYear();

  const verificationLink = `${urlFrontEnd}/verify-email?token=${token}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your TAMSHYAH Account</title>
    <style type="text/css">
        /* Reset styles */
        body, p, td, th {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        
        /* Responsive styles */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
            }
            .content {
                padding: 20px !important;
            }
            .logo {
                max-width: 200px !important;
            }
            .button {
                width: 100% !important;
                text-align: center !important;
            }
        }
        
        /* Outlook fix */
        .ExternalClass {
            width: 100%;
        }
        
        /* iOS fix */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5;">
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden;">
        Please verify your TAMSHYAH account to start exploring the world!
    </div>
    
    <!-- Main container -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5; padding: 20px;">
        <tr>
            <td align="center">
                <!-- Email container -->
                <table class="container" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 30px 0; background-color: #ffffff; border-bottom: 1px solid #eeeeee;">
                            <img class="logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bal-Shia-cSX3QLvwAtajAk9Cj0ak180iIxDAbP.png" alt="TAMSHYAH Logo" width="220" style="display: block;">
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td class="content" style="padding: 40px 50px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding-bottom: 20px;">
                                        <h1 style="font-size: 24px; color: #333333; margin: 0; font-weight: 600;">Verify Your Email Address</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <p style="margin: 0; padding-bottom: 15px;">Hello ${name},</p>
                                        <p style="margin: 0; padding-bottom: 15px;">Thank you for signing up with TAMSHYAH! To complete your registration and start exploring the world with us, please verify your email address by clicking the button below:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-bottom: 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td class="button" align="center" style="border-radius: 4px;" bgcolor="#F47B6A">
                                                    <a href="${verificationLink}" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 4px; display: inline-block; font-weight: bold;">Verify My Email</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <p style="margin: 0; padding-bottom: 15px;">If the button doesn't work, you can also verify your account by copying and pasting the following link into your browser:</p>
                                        <p style="margin: 0; word-break: break-all; color: #F47B6A;">
                                            <a href="${verificationLink}" style="color: #F47B6A; text-decoration: underline;">${verificationLink}</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="margin: 0; padding-bottom: 15px;">This verification link will expire in 24 hours. If you did not create an account with TAMSHYAH, please disregard this email.</p>
                                        <p style="margin: 0;">Thank you,<br>The TAMSHYAH Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background-color: #f9f9f9; border-top: 1px solid #eeeeee; text-align: center;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="padding-bottom: 15px; text-align: center; color: #777777; font-size: 14px;">
                                        <p style="margin: 0;">© ${d} TAMSHYAH. All rights reserved.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                            <tr>
                                                <td style="padding: 0 10px;">
                                                    <a href="https://facebook.com/tamshyah" style="color: #F47B6A; text-decoration: none; font-size: 14px;">Facebook</a>
                                                </td>
                                                <td style="padding: 0 10px;">
                                                    <a href="https://twitter.com/tamshyah" style="color: #F47B6A; text-decoration: none; font-size: 14px;">Twitter</a>
                                                </td>
                                                <td style="padding: 0 10px;">
                                                    <a href="https://instagram.com/tamshyah" style="color: #F47B6A; text-decoration: none; font-size: 14px;">Instagram</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 15px; text-align: center; color: #777777; font-size: 12px;">
                                        <p style="margin: 0;">If you have any questions, please contact us at <a href="mailto:support@tamshyah.com" style="color: #F47B6A; text-decoration: underline;">support@tamshyah.com</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
