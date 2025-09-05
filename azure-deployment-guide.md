# Azure Static Web Apps Deployment Guide

## Prerequisites

- Azure account (free tier is sufficient)
- GitHub repository with your code
- Node.js 18+ installed locally (for testing)

## Step 1: Create Azure Static Web App

1. **Go to Azure Portal**

   - Navigate to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create Static Web App**

   - Click "Create a resource" → "Static Web App"
   - Fill in the following details:
     - **Subscription**: Select your subscription
     - **Resource Group**: Create new or select existing
     - **Name**: Choose a unique name for your app
     - **Plan type**: Free (for development) or Standard (for production)
     - **Region**: Choose closest to your users
     - **Source**: GitHub
     - **GitHub account**: Connect your GitHub account
     - **Organization**: Select your GitHub username/org
     - **Repository**: Select this repository
     - **Branch**: main
     - **Build presets**: Custom
     - **App location**: `/`
     - **Api location**: `api`
     - **Output location**: `dist/spa`

3. **Review and Create**
   - Click "Review + create"
   - Click "Create"

## Step 2: Configure GitHub Secrets

After creating the Static Web App, Azure will automatically:

- Create a GitHub Actions workflow file
- Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your repository

The secret should be automatically added, but if needed, you can find it in:

- Azure Portal → Your Static Web App → Overview → "Manage deployment token"

## Step 3: Update Your Repository

The provided configuration includes:

- ✅ Azure Functions in `/api` directory
- ✅ GitHub Actions workflow in `.github/workflows/azure-static-web-apps.yml`
- ✅ Updated build scripts in `package.json`
- ✅ Static Web App configuration in `staticwebapp.config.json`

## Step 4: Deploy

1. **Push to main branch**:

   ```bash
   git add .
   git commit -m "Add Azure Static Web Apps configuration"
   git push origin main
   ```

2. **Monitor deployment**:

   - Go to GitHub → Actions tab
   - Watch the "Azure Static Web Apps CI/CD" workflow
   - Check for any build errors

3. **Access your app**:
   - Azure Portal → Your Static Web App → Overview
   - Click the URL to view your deployed app

## API Endpoints

Your API will be available at:

- `https://your-app-name.azurestaticapps.net/api/ping`
- `https://your-app-name.azurestaticapps.net/api/demo`

## Local Development

To test Azure Functions locally:

1. **Install Azure Functions Core Tools**:

   ```bash
   npm install -g azure-functions-core-tools@4 --unsafe-perm true
   ```

2. **Start the API locally**:

   ```bash
   cd api
   npm install
   npm run start
   ```

3. **Start the frontend**:
   ```bash
   # In another terminal, from project root
   npm run dev
   ```

## Custom Domain (Optional)

1. Azure Portal → Your Static Web App → Custom domains
2. Add your domain and follow DNS configuration steps
3. Azure will automatically handle SSL certificates

## Environment Variables

For production environment variables:

1. Azure Portal → Your Static Web App → Configuration
2. Add application settings as needed

## Monitoring and Logs

- **Application Insights**: Automatically enabled for monitoring
- **Live Logs**: Azure Portal → Your Static Web App → Functions → Monitor
- **GitHub Actions**: Monitor build and deployment logs in GitHub

## Troubleshooting

### Build Failures

- Check GitHub Actions logs for detailed error messages
- Ensure all dependencies are in `package.json`
- Verify build scripts run locally: `npm run build:azure`

### API Issues

- Check Function logs in Azure Portal
- Verify CORS settings in function responses
- Test functions locally with Azure Functions Core Tools

### Domain/SSL Issues

- DNS changes can take 24-48 hours to propagate
- Check custom domain configuration in Azure Portal

## Cost Optimization

**Free Tier Limits**:

- 100 GB bandwidth per month
- 0.5 GB storage
- Custom domains included

**Monitor Usage**:

- Azure Portal → Your Static Web App → Metrics
- Set up billing alerts if needed

## Next Steps

1. Set up monitoring and alerts
2. Configure custom domain if needed
3. Set up staging environments using branches
4. Configure CI/CD for other branches if needed

Your application is now ready for production on Azure! 🚀
