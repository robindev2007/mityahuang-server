export const mailVerificationEmailTemplate = (name: string, token: string) => {
  //  const d = new Date().getFullYear();

  //const verificationLink = `${urlFrontEnd}/verify-email?token=${token}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting TAMSHYAH</title>
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
                max-width: 180px !important;
            }
            .message-container {
                padding: 15px !important;
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
        Thank you for contacting TAMSHYAH. We've received your message!
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
                                        <h1 style="font-size: 24px; color: #333333; margin: 0; font-weight: 600;">Thank You for Contacting Us!</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 25px;">
                                        <p style="margin: 0; padding-bottom: 15px;">Hello {{first_name}},</p>
                                        <p style="margin: 0; padding-bottom: 15px;">Thank you for reaching out to TAMSHYAH. We've received your message and appreciate your interest in our services.</p>
                                        <p style="margin: 0;">Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
                                    </td>
                                </tr>
                                
                                <!-- Message Summary -->
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <p style="margin: 0; font-weight: bold; color: #777777; font-size: 14px; padding-bottom: 5px;">Your message to us:</p>
                                        <div class="message-container" style="background-color: #f9f9f9; border-radius: 6px; padding: 20px; border-left: 4px solid #F47B6A;">
                                            <p style="margin: 0; white-space: pre-wrap; color: #555555; font-style: italic;">{{message}}</p>
                                        </div>
                                    </td>
                                </tr>
                                
                                <!-- FAQ Section -->
                                <tr>
                                    <td style="padding-bottom: 30px;">
                                        <h2 style="font-size: 18px; color: #333333; margin: 0 0 15px 0; font-weight: 600;">While You Wait</h2>
                                        <p style="margin: 0 0 15px 0;">You might find answers to common questions on our website:</p>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <a href="https://tamshyah.com/faq" style="color: #F47B6A; text-decoration: none;">• Frequently Asked Questions</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <a href="https://tamshyah.com/explore" style="color: #F47B6A; text-decoration: none;">• Explore Popular Destinations</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0;">
                                                    <a href="https://tamshyah.com/blog" style="color: #F47B6A; text-decoration: none;">• Read Our Travel Blog</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>
                                        <p style="margin: 0;">Thank you for your patience,<br>The TAMSHYAH Team</p>
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
                                        <p style="margin: 0;">© 2025 TAMSHYAH. All rights reserved.</p>
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
                                        <p style="margin: 0;">If you have any additional questions, please contact us at <a href="mailto:support@tamshyah.com" style="color: #F47B6A; text-decoration: underline;">support@tamshyah.com</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                
                <!-- Unsubscribe footer -->
                <table border="0" cellpadding="0" cellspacing="0" width="600">
                    <tr>
                        <td style="padding: 20px 0; text-align: center; color: #999999; font-size: 12px;">
                            <p style="margin: 0;">You received this email because you contacted TAMSHYAH.</p>
                            <p style="margin: 5px 0 0 0;">
                                <a href="https://tamshyah.com/unsubscribe?email={{email}}" style="color: #999999; text-decoration: underline;">Unsubscribe</a> |
                                <a href="https://tamshyah.com/privacy" style="color: #999999; text-decoration: underline;">Privacy Policy</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
