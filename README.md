# portfolio-backend
🚀💻 Backend API for my personal portfolio website built with Node.js, Express.js, MongoDB, and Mongoose. Provides RESTful APIs for managing projects, skills, experience, and contact form submissions with a scalable and secure architecture.

# Portfolio Backend

A RESTful backend API for my personal portfolio website built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This backend powers the portfolio by providing APIs for managing projects, skills, work experience, and contact form submissions.
## 🚀 Tech Stack

### Backend
- Node.js
- Express.js 5
- MongoDB
- Mongoose

### Architecture
- Service Layer Architecture
- RESTful API Design
- Modular Folder Structure

### Middleware
- CORS
- Express Middleware
- Centralized Error Handling

### Utilities
- dotenv
- Async Handler
- API Response Helper
- Logger

### Development Tools
- Nodemon
- ESLint
- Prettier

---

## ✨ Features

- RESTful API Architecture
- Service Layer Architecture
- Modular Project Structure
- CRUD APIs for Portfolio Projects
- Skills Management API
- Experience Management API
- Contact Form API
- MongoDB Integration with Mongoose
- Centralized Error Handling Middleware
- Reusable API Response Utilities
- Environment-based Configuration (`.env`)
- `.env.example` for Easy Setup
- Request Validation
- Scalable Folder Structure
- Clean and Maintainable Codebase

## 📁 Project Structure

```
portfolio-backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │   ├── project.controller.js
│   │   ├── skill.controller.js
│   │   ├── experience.controller.js
│   │   └── contact.controller.js
│   │
│   ├── models/
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Experience.js
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   ├── project.routes.js
│   │   ├── skill.routes.js
│   │   ├── experience.routes.js
│   │   └── contact.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── validate.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── services/
│   │   ├── project.service.js
│   │   ├── skill.service.js
│   │   └── contact.service.js
│   │
│   ├── validators/
│   │   ├── project.validator.js
│   │   ├── skill.validator.js
│   │   └── contact.validator.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── logger.js
│   │   └── generateToken.js
│   │
│   ├── constants/
│   │   └── index.js
│   │
│   ├── app.js
│   └── server.js
│
├── public/
│
├── uploads/
│
├── tests/
│   ├── project.test.js
│   └── contact.test.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/portfolio-backend.git
```

Go to the project directory

```bash
cd portfolio-backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
```

Run the development server

```bash
npm run dev
```

Production

```bash
npm start
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/projects | Get all projects |
| GET | /api/projects/:id | Get project by ID |
| POST | /api/projects | Create project |
| PUT | /api/projects/:id | Update project |
| DELETE | /api/projects/:id | Delete project |

## 🛠️ Built With

- Node.js
- Express.js
- MongoDB
- Mongoose

## 👨‍💻 Author

**Jagdish Mahanta**

- GitHub: https://github.com/your-username
- Portfolio: https://your-portfolio-url.com

---

⭐ If you like this project, don't forget to give it a star!
