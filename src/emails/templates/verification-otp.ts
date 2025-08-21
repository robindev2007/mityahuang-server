import { currYear } from "../utils/curr-year";

export function verificationOtp(codes: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code - LOGO</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
        }
        .email-container {
            max-width: 550px;
            margin: 0 auto;
            background-color: #ffffff;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #2D5A5A;
            padding: 20px;
            text-align: center;
        }
        .logo {
            color: #FFA500;
            font-size: 32px;
            font-weight: bold;
            margin: 0;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .title {
            color: #2D5A5A;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666666;
            font-size: 16px;
            margin-bottom: 30px;
        }
        .otp-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            margin: 30px auto;
            flex-wrap: wrap;
            max-width: 350px;
            text-align: center;
        }
        .otp-digit {
            width: 30px;
            height: 40px;
            background-color: #ffffff;
            border: 1px solid #C67B5C;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: 600;
            color: #2D5A5A;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            flex-shrink: 0;
            text-align: center;
            vertical-align: middle;
            line-height: 40px;
        }
        .instructions {
            color: #666666;
            font-size: 14px;
            margin: 20px 0;
            line-height: 1.5;
        }
        .warning {
            background-color: #FFF3E0;
            border-left: 4px solid #C67B5C;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }
        .warning-text {
            color: #C67B5C;
            font-size: 14px;
            margin: 0;
        }
        .footer {
            background-color: #F5F1EB;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        .footer-text {
            color: #888888;
            font-size: 12px;
            margin: 0;
        }
        .footer-logo {
            color: #C67B5C;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        /* Email client specific fixes */
        table.otp-table {
            margin: 30px auto;
            border-collapse: collapse;
        }
        
        table.otp-table td {
            padding: 0 4px;
        }
        
        @media (max-width: 480px) {
            .content {
                padding: 30px 20px;
            }
            .otp-digit {
                width: 30px;
                height: 40px;
                font-size: 20px;
            }
            .otp-container {
                gap: 6px;
                max-width: 300px;
            }
            .title {
                font-size: 20px;
            }
        }

    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1 class="logo">LOGO</h1>
        </div>
 
        <!-- Main Content -->
        <div class="content">
            <h2 class="title">Verify Your Account</h2>
            <p class="subtitle">Enter the 6-digit code below to complete your verification</p>
 
            <!-- OTP Code Display - Better Email Client Compatible Version -->
            <center>
                <div class="otp-container">
                    ${codes
                      .split("")
                      .map(
                        (digit) =>
                          `<div class="otp-digit" id="digit-${digit}">${digit}</div>`,
                      )
                      .join("")}
                </div>
            </center>
            
 
            <p class="instructions">
                This code will expire in <strong>10 minutes</strong>.
                If you didn't request this code, please ignore this email.
            </p>
        </div>
 
        <!-- Footer -->
        <div class="footer">
            <div class="footer-logo">LOGO</div>
            <p class="footer-text">
                © ${currYear()} LOGO. All rights reserved.<br>
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
 `;
}
