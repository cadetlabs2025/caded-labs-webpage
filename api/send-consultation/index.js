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
    if (!formData.name || !formData.email || !formData.company) {
      const response = {
        success: false,
        message:
          "Missing required fields: name, email, and company are required.",
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
    const emailSubject = `New Consultation Request - ${formData.name}`;
    const emailBody = `
New Consultation Request Received

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
${formData.designation ? `Designation: ${formData.designation}` : ""}
${formData.country ? `Country: ${formData.country}` : ""}
${formData.service ? `Service Interest: ${formData.service}` : ""}
${formData.product ? `Product Interest: ${formData.product}` : ""}

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
          html: formatEmailHTML(formData),
        });

        emailSent = true;
        context.log("✅ Email sent successfully via SendGrid");
      } catch (sgError) {
        context.log.error("❌ SendGrid error:", sgError);
        emailError = sgError.message || "SendGrid error";
      }
    } else {
      context.log("⚠️ SendGrid not configured. Logging consultation request:");
      context.log(emailBody);
    }

    const response = {
      success: true,
      message: emailSent
        ? "Consultation request sent successfully to contact@cadetlabs.io"
        : "Consultation request received. Our team will contact you shortly.",
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
    context.log.error("Error processing consultation request:", error);
    const response = {
      success: false,
      message: "Failed to process consultation request. Please try again.",
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

function formatEmailHTML(data) {
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
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Consultation Request</h2>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${data.email}</span>
          </div>
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>
          ${
            data.designation
              ? `
          <div class="field">
            <span class="label">Designation:</span>
            <span class="value">${data.designation}</span>
          </div>
          `
              : ""
          }
          ${
            data.country
              ? `
          <div class="field">
            <span class="label">Country:</span>
            <span class="value">${data.country}</span>
          </div>
          `
              : ""
          }
          ${
            data.service
              ? `
          <div class="field">
            <span class="label">Service Interest:</span>
            <span class="value">${data.service}</span>
          </div>
          `
              : ""
          }
          ${
            data.product
              ? `
          <div class="field">
            <span class="label">Product Interest:</span>
            <span class="value">${data.product}</span>
          </div>
          `
              : ""
          }
        </div>
        <div class="footer">
          <p>Submitted on ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
