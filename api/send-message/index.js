module.exports = async function (context, req) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    context.res = {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
    return;
  }

  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.message) {
      const response = {
        success: false,
        message:
          "Missing required fields: first name, email, and message are required.",
      };
      context.res = {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(response),
      };
      return;
    }

    // Format email content
    const fullName = formData.lastName
      ? `${formData.firstName} ${formData.lastName}`
      : formData.firstName;
    const emailSubject = `New Contact Form Message - ${fullName}`;
    const emailBody = `
New Contact Form Message Received

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${fullName}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ""}
${formData.interest ? `Area of Interest: ${formData.interest}` : ""}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
    `.trim();

    // Try to send email using SendGrid if configured
    let emailSent = false;
    let emailError = null;

    if (process.env.SENDGRID_API_KEY) {
      try {
        const sgMail = require("@sendgrid/mail");
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        await sgMail.send({
          to: "contact@cadetlabs.io",
          from: process.env.SENDGRID_FROM_EMAIL || "noreply@cadetlabs.io",
          subject: emailSubject,
          text: emailBody,
          html: formatEmailHTML(formData, fullName),
        });

        emailSent = true;
        context.log("✅ Email sent successfully via SendGrid");
      } catch (sgError) {
        context.log.error("❌ SendGrid error:", sgError);
        emailError = sgError.message || "SendGrid error";
      }
    } else {
      context.log("⚠️ SendGrid not configured. Logging contact form message:");
      context.log(emailBody);
    }

    const response = {
      success: true,
      message: emailSent
        ? "Message sent successfully to contact@cadetlabs.io"
        : "Message received. Our team will contact you shortly.",
    };

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    context.log.error("Error processing contact form message:", error);
    const response = {
      success: false,
      message: "Failed to process message. Please try again.",
    };
    context.res = {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(response),
    };
  }
};

function formatEmailHTML(data, fullName) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #1f2937; }
        .value { color: #4b5563; margin-left: 10px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #06b6d4; margin: 15px 0; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Message</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${fullName}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>
          `
              : ""
          }
          ${
            data.interest
              ? `
          <div class="field">
            <span class="label">Area of Interest:</span>
            <span class="value">${data.interest}</span>
          </div>
          `
              : ""
          }
          <div class="message-box">
            <div class="label">Message:</div>
            <div style="margin-top: 10px; white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Submitted on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
