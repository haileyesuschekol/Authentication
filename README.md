# Authentication

The project allows users to sign in, sign up, reset their passwords, receive verification emails, and log out. It provides secure user management and ensures that only verified users can access certain features.

## Showcase Images Side by Side

<div style="display: flex; justify-content: space-around;">
  <img src="./screenshot/signup.png" alt="Screenshot 1" width="300" height="300" style="margin-right: 10px;" />
  <img src="./screenshot/login.png" alt="Screenshot 2" width="300" height="300" style="margin-left: 10px;" />
</div>

<div style="display: flex; justify-content: space-around;">
  <img src="./screenshot/verify-e.png" alt="Screenshot 1" width="300" height="200" style="margin-right: 10px;" />
  <img src="./screenshot/forgot.png" alt="Screenshot 2" width="300" height="200" style="margin-left: 10px;" />
</div>

<div style="display: flex; justify-content: space-around;">
  <img src="./screenshot/forgotp.png" alt="Screenshot 1" width="300" height="200" style="margin-right: 10px;" />
  <img src="./screenshot/resetp.png" alt="Screenshot 2" width="300" height="200" style="margin-left: 10px;" />
</div>

<!-- #### signup

![Demo App](./screenshot/signup.png)

#### login

![Demo App](./screenshot/login.png)

#### verify-email

![Demo App](./screenshot/verify-e.png)

#### forgot-password

![Demo App](./screenshot/forgot.png)

#### forgot-password

![Demo App](./screenshot/forgotp.png)

#### reset-password

![Demo App](./screenshot/resetp.png) -->

## Features

- User Authentication System
- Email Verification Workflow
- Password Reset Mechanism
- Protected Routes Implementation
- Fully Functional Frontend UI
- Scalable and Secure Backend
- Deployment-Ready Project

## Setup

### Create a `.env` File

Add the following environment variables to your `.env` file:

```bash
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=http://localhost:5173
```

### Run This App Locally

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Build the App:**

   ```bash
   npm run build
   ```

3. **Start the App:**
   ```bash
   npm run start
   ```

---

## Screenshot

![Demo App](frontend/public/screenshot-for-readme.png)

---
