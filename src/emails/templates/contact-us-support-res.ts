export type T_CustomerPayload = {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_id: string;
  message: string;
};
export const contactUsSupportTeamEmailTemplate = (
  name: string,
  subject: string,
  customerPayload: T_CustomerPayload,
) => {
  //  const d = new Date().getFullYear();

  //const verificationLink = `${urlFrontEnd}/verify-email?token=${token}`;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Support Ticket - TAMSHYAH Support Center</title>
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
          .ticket-info td {
              display: block !important;
              width: 100% !important;
              padding: 5px 0 !important;
          }
          .action-buttons td {
              display: block !important;
              width: 100% !important;
              padding: 5px 0 !important;
          }
          .action-button {
              width: 100% !important;
              text-align: center !important;
              display: block !important;
          }
          .customer-info td {
              display: block !important;
              width: 100% !important;
              padding: 5px 0 !important;
          }
          .priority-badge {
              margin-top: 10px !important;
              display: inline-block !important;
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
    <!-- Main container -->
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="background-color: #f5f5f5; padding: 20px;"
    >
      <tr>
        <td align="center">
          <!-- Email container -->
          <table
            class="container"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="650"
            style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);"
          >
            <!-- Header -->
            <tr>
              <td
                align="center"
                style="padding: 25px 0; background-color: #ffffff; border-bottom: 1px solid #eeeeee;"
              >
                <table border="0" cellpadding="0" cellspacing="0" width="90%">
                  <tr>
                    <td width="50%" align="left">
                      <img
                        class="logo"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bal-Shia-cSX3QLvwAtajAk9Cj0ak180iIxDAbP.png"
                        alt="TAMSHYAH Logo"
                        width="180"
                        style="display: block;"
                      />
                    </td>
                    <td width="50%" align="right">
                      <p style="margin: 0; font-size: 14px; color: #777777;">
                        Support Center
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td class="content" style="padding: 30px 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <!-- Subject -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <h2
                        style="font-size: 18px; color: #333333; margin: 0; font-weight: 600;"
                      >
                        ${subject}
                      </h2>
                    </td>
                  </tr>

                  <!-- Customer Information -->
                  <tr>
                    <td style="padding-bottom: 25px;">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="background-color: #f9f9f9; border-radius: 6px; padding: 15px;"
                      >
                        <tr>
                          <td colspan="2" style="padding-bottom: 10px;">
                            <h3
                              style="font-size: 16px; color: #333333; margin: 0; font-weight: 600;"
                            >
                              Customer Information
                            </h3>
                          </td>
                        </tr>
                        <tr class="customer-info">
                          <td
                            width="50%"
                            style="padding-bottom: 8px; padding-right: 10px;"
                          >
                            <p
                              style="margin: 0; font-size: 14px; color: #777777;"
                            >
                              Name:
                            </p>
                            <p style="margin: 0; font-weight: 500;">
                              ${name}
                            </p>
                          </td>
                          <td width="50%" style="padding-bottom: 8px;">
                            <p
                              style="margin: 0; font-size: 14px; color: #777777;"
                            >
                              Email:
                            </p>
                            <p style="margin: 0; font-weight: 500;">
                              <a
                                href="mailto:${customerPayload.customer_email}"
                                style="color: #F47B6A; text-decoration: none;"
                                >${customerPayload.customer_email}</a
                              >
                            </p>
                          </td>
                        </tr>
                        <tr class="customer-info">
                          <td
                            width="50%"
                            style="padding-bottom: 8px; padding-right: 10px;"
                          >
                            <p
                              style="margin: 0; font-size: 14px; color: #777777;"
                            >
                              Phone:
                            </p>
                            <p style="margin: 0; font-weight: 500;">
                              <a
                                href="tel:{{customer_phone}}"
                                style="color: #333333; text-decoration: none;"
                                >${customerPayload.customer_phone}</a
                              >
                            </p>
                          </td>
                          <td width="50%" style="padding-bottom: 8px;">
                            <p
                              style="margin: 0; font-size: 14px; color: #777777;"
                            >
                              Customer ID:
                            </p>
                            <p style="margin: 0; font-weight: 500;">
                              ${customerPayload.customer_id}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding-bottom: 25px;">
                      <h3
                        style="font-size: 16px; color: #333333; margin: 0 0 10px 0; font-weight: 600;"
                      >
                        Customer Message:
                      </h3>
                      <div
                        style="background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 6px; padding: 20px; border-left: 4px solid #F47B6A;"
                      >
                        <p style="margin: 0; white-space: pre-wrap;">
                          ${customerPayload.message}
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="padding: 25px; background-color: #f9f9f9; border-top: 1px solid #eeeeee; text-align: center;"
              >
                <p style="margin: 0; font-size: 14px; color: #777777;">
                  This is an automated notification from the TAMSHYAH Support
                  Center.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

`;
};
