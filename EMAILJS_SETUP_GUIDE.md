# EmailJS Setup Guide - Complete Instructions

## Overview

This guide covers everything you need to set up EmailJS for sending consultation form submissions to `contact@cadetlabs.io`.

---

## Part 1: Initial Setup (One-Time)

### Step 1: Sign Up for EmailJS

1. Go to https://www.emailjs.com
2. Sign up for a free account (200 emails/month free)
3. Verify your email

### Step 2: Create Email Service

1. Go to **Email Services** → **Add New Service**
2. Choose **Gmail** (or your email provider)
3. Click **Connect Account** and authorize EmailJS
4. Copy the **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Configure the template:

   **Right Sidebar - Email Settings:**

   - **To Email**: `contact@cadetlabs.io`
   - **From Name**: `{{from_name}}`
   - **From Email**: Use default email address (checked)
   - **Reply To**: `{{from_email}}`

   **Subject Field:**

   ```
   New Consultation Request - {{from_name}}
   ```

   **Content Field:**

   ```
   New Consultation Request Received

   Contact Information:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Designation: {{designation}}
   Country: {{country}}
   Service Interest: {{service}}

   Message: {{message}}

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Submitted: {{date}}
   ```

3. **Save** the template
4. Copy the **Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Configure in Project

1. Create `.env` file in `caded-labs-webpage-main` folder
2. Add these lines (replace with your actual values):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. **Restart your dev server** (`npm run dev`)

---

## Part 2: Template Variables Reference

### Variables Your Code Sends:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{company}}` - Company name
- `{{designation}}` - Job title (or "Not provided")
- `{{country}}` - Country (or "Not provided")
- `{{service}}` - Service interest
- `{{message}}` - Summary message
- `{{date}}` - Submission date and time

### Important Notes:

- Use these **exact variable names** in your template
- Remove any test variables like `{{Munendra}}`, `{{time}}`, `{{Test data }}`
- All variables are automatically populated from the form

---

## Part 3: Testing

### Test Your Setup:

1. Submit a consultation form from your website
2. Check browser console for any errors
3. Check your email at `contact@cadetlabs.io`
4. Verify all form data appears correctly in the email

### Troubleshooting:

**Emails not sending?**

- Check `.env` file exists and has correct values
- Restart dev server after creating/updating `.env`
- Verify EmailJS package is installed: `npm install @emailjs/browser`
- Check browser console for errors

**Emails sending but data missing?**

- Verify template uses correct variable names (see Part 2)
- Check template is saved in EmailJS dashboard
- Remove any test/example variables from template

**Wrong email address?**

- Update "To Email" in EmailJS template to `contact@cadetlabs.io`
- Code is already configured to send to `contact@cadetlabs.io`

---

## Part 4: Updating Template (If Needed)

### To Update Email Address:

1. Go to EmailJS Dashboard → Email Templates
2. Edit your template
3. Change "To Email" field to desired address
4. Click **Save**

### To Update Email Content:

1. Edit template in EmailJS Dashboard
2. Update Subject or Content fields
3. Use variables from Part 2
4. Click **Save**

---

## Quick Reference

**Current Configuration:**

- **Service ID**: `service_9nevwgc`
- **Template ID**: `template_0cqpv2s`
- **Public Key**: `OtTzhdEYlxW3GfZqg`
- **To Email**: `contact@cadetlabs.io`

**Files Updated:**

- All form pages (Services, Contact, Products, PMSAssetBuilder)
- Server route (consultation.ts)
- All configured to send to `contact@cadetlabs.io`

---

## Support

If you encounter issues:

1. Check EmailJS dashboard → Logs to see if emails are being sent
2. Check browser console for JavaScript errors
3. Verify all environment variables are set correctly
4. Ensure EmailJS template is saved and published

---

**That's it!** Your email system is now fully configured. All consultation forms will send emails to `contact@cadetlabs.io` with complete form data.

---

## Alternative Email Methods (Optional)

If you need to use alternative email services instead of EmailJS:

### SendGrid (For Azure Deployment)

- See server code in `server/routes/consultation.ts`
- Requires `SENDGRID_API_KEY` environment variable
- Install: `npm install @sendgrid/mail`

### SMTP (Gmail, Outlook, etc.)

- See server code in `server/routes/consultation.ts`
- Requires `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` environment variables
- Configure in `.env` file or Azure environment variables
