# 🎫 MERN Support Tickets System

<div align="center">

![MERN Stack](https://img.shields.io/badge/MERN-Stack-brightgreen?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A full-stack customer support ticket management system built with the MERN stack**

[Live Demo](https://mern-support-tickets.vercel.app/) • [Features](#-features) • [Installation](#-installation) • [API Docs](#-api-endpoints)

</div>

---

## 📋 Overview

A production-ready support ticket management system that enables users to create, track, and manage support tickets with admin notes functionality. Built with modern web technologies and best practices including JWT authentication, Redux state management, and responsive Tailwind UI.

## ✨ Features

### 🔐 Authentication & Authorization
- Secure user registration and login with JWT tokens
- Protected routes with middleware authentication
- Persistent login state with Redux
- Password hashing with bcrypt

### 🎫 Ticket Management
- Create support tickets with product selection and issue description
- View all user tickets with status tracking (New, Open, Closed)
- Individual ticket detail view with full information
- Update ticket status
- Delete tickets

### 📝 Notes System
- Add internal notes to tickets
- Staff-only note visibility
- Note history with timestamps
- Associate notes with specific tickets

### 🎨 Modern UI/UX
- Fully responsive design with Tailwind CSS
- Loading spinners for async operations
- Toast notifications for user feedback
- Clean, intuitive interface
- SEO optimized with meta tags and Open Graph support

### 🚀 Performance & Deployment
- Vite for lightning-fast development and builds
- Vercel deployment ready with configuration
- Optimized bundle size
- Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **Redux Toolkit** - State management with async thunks
- **React Router v6** - Client-side routing with protected routes
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

---

## 📁 Project Structure

```
mern-support-tickets/
├── backend/                    # Node.js + Express API
│   ├── config/                 # Database configuration
│   ├── controllers/            # Route controllers
│   ├── middleware/             # Auth & error middleware
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   └── server.js               # Entry point
│
├── frontend/                   # React + Vite application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── app/                # Redux store
│   │   ├── components/         # Reusable components
│   │   ├── features/           # Redux slices & services
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Route pages
│   │   └── App.jsx             # Main app component
│   └── vercel.json             # Deployment config
│
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Siddique-7/mern-support-tickets.git
cd mern-support-tickets
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key" > .env

# Start backend server
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Start frontend development server
npm run dev
```

### 4. Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 🔌 API Endpoints

### Authentication
```http
POST   /api/users/register    # Register new user
POST   /api/users/login       # Login user
GET    /api/users/me          # Get current user (Protected)
```

### Tickets
```http
GET    /api/tickets           # Get all user tickets (Protected)
POST   /api/tickets           # Create new ticket (Protected)
GET    /api/tickets/:id       # Get single ticket (Protected)
PUT    /api/tickets/:id       # Update ticket (Protected)
DELETE /api/tickets/:id       # Delete ticket (Protected)
```

### Notes
```http
GET    /api/tickets/:ticketId/notes    # Get notes for ticket (Protected)
POST   /api/tickets/:ticketId/notes    # Add note to ticket (Protected)
```

---

## 🎯 Key Features Implementation

### Redux State Management
- **authSlice**: Handles user authentication state
- **ticketSlice**: Manages ticket CRUD operations
- **noteSlice**: Controls note functionality
- Async thunks for API integration
- Centralized error handling

### Protected Routes
```jsx
<PrivateRoute>
  <Outlet />
</PrivateRoute>
```
Custom `PrivateRoute` component with `useAuthStatus` hook for authentication checks.

### Responsive Design
Built with Tailwind CSS utility classes for mobile-first responsive design across all devices.

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

The project includes `vercel.json` configuration for seamless deployment.

### Backend (Railway/Heroku/Render)
1. Set environment variables
2. Deploy from GitHub repository
3. Update frontend API URLs

---

## 📸 Screenshots

### Welcome Page
![Welcome Page](https://res.cloudinary.com/dauvdrmb7/image/upload/v1760955509/Screenshot_2025-10-20_152017_xce6qx.png)

### Home Page
![Home Page](https://res.cloudinary.com/dauvdrmb7/image/upload/v1760955566/Screenshot_2025-10-20_153707_swjjvu.png)

### Create New Ticket
![Create New Ticket](https://res.cloudinary.com/dauvdrmb7/image/upload/v1760955656/Screenshot_2025-10-20_153843_e66k2o.png)

### Show Tickets
![Show Tickets](https://res.cloudinary.com/dauvdrmb7/image/upload/v1760955702/Screenshot_2025-10-20_153912_y63owb.png)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Siddique**

- GitHub: [@Siddique-7](https://github.com/Siddique-7)
- LinkedIn: [@mdsiddique07](https://www.linkedin.com/in/mdsiddique07/)

---

## 🙏 Acknowledgments

- MERN Stack Community
- Redux Toolkit Documentation
- Tailwind CSS Team
- All contributors and supporters

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by Siddique

</div>
