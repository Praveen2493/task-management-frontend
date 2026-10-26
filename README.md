# Task Management System

A full-stack task management application built with React, Express, and MongoDB.

## Features

- JWT-based registration, login, and protected pages
- Task creation, assignment, status and priority tracking
- Shared tasks with view or edit permissions
- Threaded comments with task-level authorization
- Email and in-app notifications for assignments, updates, status changes, and approaching deadlines
- Priority sorting and overdue task highlighting
- User profile management and responsive dashboard

## Run locally

Install dependencies in both project directories:

```bash
cd server
npm install
npm run dev
```

In a second terminal:

```bash
cd task-management-frontend
npm install
npm run dev
```

## Environment

Create `server/.env` with deployment-specific values:

```dotenv
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=generate_a_long_random_secret
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_notification_email
EMAIL_PASS=your_email_provider_app_password
DEADLINE_REMINDER_HOURS=24
```

Create `task-management-frontend/.env`:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

The server reminder worker checks every 15 minutes and sends an assigned user one deadline reminder within the configured lead time. Configure email credentials in the backend deployment environment; do not commit `.env` files or credentials.

## Production build

From `task-management-frontend`, run:

```bash
npm run lint
npm run build
```

Deploy the `dist` directory to a static host and deploy the `server` directory to a Node.js host. Configure MongoDB access, `JWT_SECRET`, email settings, `CLIENT_URL`, and `VITE_API_URL` in the respective hosting dashboards.
