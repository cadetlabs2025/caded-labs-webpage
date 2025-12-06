import { RequestHandler } from "express";
import { ConsultationRequest, ConsultationResponse } from "@shared/api";

export const handleConsultation: RequestHandler = async (req, res) => {
  try {
    const formData: ConsultationRequest = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.company) {
      const response: ConsultationResponse = {
        success: false,
        message:
          "Missing required fields: name, email, and company are required.",
      };
      return res.status(400).json(response);
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

    // For Azure deployment, you would integrate with SendGrid, Azure Communication Services, or similar
    // For now, we'll use a mailto link approach or you can configure SMTP

    // Option 1: Use mailto (works but requires email client)
    // This is a fallback - in production, use a proper email service

    // Option 2: For Azure Static Web Apps, create an Azure Function that uses SendGrid
    // For now, we'll simulate sending and return success
    // In production, replace this with actual email sending logic

    // TODO: Integrate with SendGrid or Azure Communication Services for production
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'contact@cadetlabs.io',
    //   from: 'noreply@cadetlabs.io',
    //   subject: emailSubject,
    //   text: emailBody,
    //   html: formatEmailHTML(formData)
    // });

    // Send email - Try multiple methods
    let emailSent = false;
    let emailError: string | null = null;

    // Method 1: Try SendGrid (recommended for Azure)
    if (process.env.SENDGRID_API_KEY && !emailSent) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
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
        console.log(
          "✅ Email sent successfully via SendGrid to contact@cadetlabs.io",
        );
      } catch (sgError: any) {
        if (sgError.code === "MODULE_NOT_FOUND") {
          console.warn(
            "⚠️ SendGrid package not installed. Install with: npm install @sendgrid/mail",
          );
        } else {
          console.error("❌ SendGrid error:", sgError);
          emailError = sgError.message || "SendGrid error";
        }
      }
    }

    // Method 2: Try SMTP (nodemailer) if SendGrid is not available
    if (!emailSent && process.env.SMTP_HOST) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: "contact@cadetlabs.io",
          subject: emailSubject,
          text: emailBody,
          html: formatEmailHTML(formData),
        });

        emailSent = true;
        console.log(
          "✅ Email sent successfully via SMTP to contact@cadetlabs.io",
        );
      } catch (smtpError: any) {
        console.error("❌ SMTP error:", smtpError);
        emailError = smtpError.message || "SMTP error";
      }
    }

    // Method 3: If no email service configured, use mailto as fallback
    // This creates a mailto link that the user can click
    if (!emailSent) {
      const mailtoBody = encodeURIComponent(emailBody);
      const mailtoSubject = encodeURIComponent(emailSubject);
      const mailtoLink = `mailto:contact@cadetlabs.io?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Log the formatted email for manual sending
      const formattedEmail = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSULTATION REQUEST - ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${emailBody}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim();

      console.log("\n" + "=".repeat(70));
      console.log("📧 CONSULTATION REQUEST RECEIVED");
      console.log("=".repeat(70));
      console.log(formattedEmail);
      console.log("=".repeat(70));
      console.log("\n⚠️  Email service not configured.");
      console.log("Mailto link:", mailtoLink);
      console.log(
        "\nTo enable automatic email sending, configure one of the following:",
      );
      console.log("1. SENDGRID_API_KEY (recommended for Azure)");
      console.log("2. SMTP_HOST, SMTP_USER, SMTP_PASS (for SMTP)");
      console.log(
        "\nFor now, manually send this information to: contact@cadetlabs.io\n",
      );
    }

    const response: ConsultationResponse = {
      success: true,
      message: emailSent
        ? "Consultation request sent successfully to contact@cadetlabs.io"
        : "Consultation request received. Please check server logs for details.",
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing consultation request:", error);
    const response: ConsultationResponse = {
      success: false,
      message: "Failed to process consultation request. Please try again.",
    };
    res.status(500).json(response);
  }
};

// Helper function to format HTML email (for when you implement SendGrid)
function formatEmailHTML(data: ConsultationRequest): string {
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
