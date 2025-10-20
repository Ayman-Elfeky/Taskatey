# Taskaty - Task Management System

Taskaty is a modern task management system built with React, Node.js, and MongoDB. It provides a comprehensive solution for managing tasks, projects, and team collaboration.

## Features

### Authentication
- Email-based authentication
- JWT-based secure authentication
- Email verification system
- Password reset functionality
- Social authentication (coming soon)

### Task Management
- Create, read, update, and delete tasks
- Task status tracking (To Do, In Progress, Done)
- Task prioritization (Low, Medium, High)
- Task assignment to team members
- Task comments and discussions
- Task progress tracking
- Due date management

### Project Management
- Create and manage projects
- Team member management
- Project status tracking
- Project activity monitoring
- Project deadline management

### User Interface
- Modern and responsive design
- Multiple view options (Kanban, List, Calendar)
- Real-time updates
- Dark/Light mode support
- Mobile-friendly interface

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn UI components
- Zustand for state management
- React Query for data fetching
- Axios for API requests
- Socket.IO for real-time features

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Socket.IO for real-time communication
- Nodemailer for email services
- Bcrypt for password hashing

## Project Structure

```
Taskaty/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   └── public/             # Static assets
│
└── Backend/                 # Node.js backend application
    ├── config/             # Configuration files
    ├── controllers/        # Route controllers
    ├── middlewares/        # Custom middlewares
    ├── models/            # Mongoose models
    ├── routers/           # API routes
    └── utils/             # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Taskaty.git
cd Taskaty
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../Backend
npm install
```

4. Create environment files:


## 🧩 `.env.example` Frontend

```bash
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_API_BASE_URL="http://localhost:3000"
# Authentication
VITE_AUTH_TOKEN_KEY=auth_token
VITE_AUTH_USER_KEY=auth_user

# Feature Flags
VITE_ENABLE_SOCIAL_AUTH=false
VITE_ENABLE_EMAIL_VERIFICATION=true

# App Configuration
VITE_APP_NAME=Taskaty
VITE_APP_VERSION=1.0.0
```

---


## 🧩 `.env.example` Backend

```bash
# Server
PORT=3000

# Database
# Example local connection
Connection_String="mongodb://localhost:27017/taskaty"
# Example cloud connection (replace <username>, <password>, <cluster>)
# Connection_String="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/"

# Frontend
FRONTEND_URL=http://localhost:8080

# JWT (JSON Web Token)
JWT_SECRET="your_secret_key_here"
JWT_EXPIRES_IN="7d"

# Environment
# Use "production" or "development"
NODE_ENV="development"

# Mock data usage (true/false)
USE_MOCK=true

# Links (change before production)
VERIFICATIONLINK="http://localhost:3000/api/auth/verify-email"
RESET_PASS_LINK="http://localhost:3000/api/auth/change-password"

# App email credentials (for Nodemailer or similar)
APP_EMAIL_ADDRESS="your_email@example.com"
APP_EMAIL_PASSWORD="your_app_password"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Cloudinary configuration
CLOUDINARY_URL="cloudinary://<api_key>:<api_secret>@<cloud_name>"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

---


5. Start the development servers:

Frontend:
```bash
cd frontend
npm run dev
```

Backend:
```bash
cd Backend
npm run dev
```

## API Documentation

### Authentication Endpoints
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user
- POST `/api/auth/reset-password` - Request password reset
- GET `/api/auth/verify-email` - Verify email address

### Task Endpoints
- GET `/api/task/me` - Get user's tasks
- POST `/api/task` - Create a new task
- PUT `/api/task/:id` - Update a task
- DELETE `/api/task/:id` - Delete a task

### Project Endpoints
- GET `/api/project/me` - Get user's projects
- POST `/api/project` - Create a new project
- PUT `/api/project/:id` - Update a project
- DELETE `/api/project/:id` - Delete a project

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO](https://socket.io/) 
