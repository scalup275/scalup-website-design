import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmail({
  name,
  email,
  phone,
  message,
  classPreference,
  source,
}) {
  const toEmail = process.env.MAIL_TO?.trim();
  if (!toEmail) throw new Error("MAIL_TO missing");

  // Detect agency lead
  const isAgency = source === "agency";

  // Safe values
  const safeSource = source ? source.toUpperCase() : "WEBSITE";
  const safeMessage = message || "Not provided";
  const safeClass = classPreference || "Not specified";

  return transporter.sendMail({
    from: `"SCALUP Website" <${process.env.MAIL_USER}>`,
    to: toEmail,
    subject: `🚀 New ${safeSource} Lead | SCALUP`,
    html: `
      <div style="background:#f9fafb;padding:40px 0;font-family:Arial">
        <table width="100%" style="max-width:600px;margin:auto;background:#fff;border-radius:12px">
          
          <!-- Header -->
          <tr>
            <td style="background:#f97316;padding:20px;color:white">
              <h2 style="margin:0">New Lead Received</h2>
              <p style="margin:6px 0 0">Source: ${safeSource}</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px">
              <table width="100%" style="font-size:14px">
                <tr><td><b>Name</b></td><td>${name}</td></tr>
                <tr><td><b>Email</b></td><td>${email}</td></tr>
                <tr><td><b>Phone</b></td><td>${phone}</td></tr>

                ${
                  isAgency
                    ? `<tr><td><b>Business Website</b></td><td>${safeMessage}</td></tr>`
                    : `<tr><td><b>Class Preference</b></td><td>${safeClass}</td></tr>`
                }
              </table>

              ${
                !isAgency
                  ? `
                <div style="margin-top:20px;padding:16px;background:#fff7ed;border-radius:8px">
                  ${safeMessage}
                </div>
              `
                  : ``
              }
            </td>
          </tr>

        </table>
      </div>
    `,
  });
}
