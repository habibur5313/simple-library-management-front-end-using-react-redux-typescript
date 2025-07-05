
---

````markdown
# 📚 LibraryHub – Minimal Library Management System

**LibraryHub** is a minimalist, responsive frontend web application for managing books in a library. Built using **React**, **TypeScript**, and **Redux Toolkit Query**, it integrates with a RESTful API to enable users to view, add, edit, delete, and borrow books.

> 🔗 **Live API**: [https://simplelibrarymanagement.vercel.app/](https://simplelibrarymanagement.vercel.app/)  
> 💾 **Backend Repo**: [habibur5313/simple-library-management-back-end](https://github.com/habibur5313/simple-library-management-back-end-using-express-mongoose-and-typescript)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [API Endpoints](#api-endpoints)
- [UI Components](#ui-components)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 🌟 Features

### 🔓 Public Routes
- All pages are accessible without authentication or user accounts.

### 📘 Book Management
- View all books in a sortable, responsive table.
- Add new books with form validation.
- Edit or delete existing books.
- Borrow books with proper availability check.

### 🔄 Borrow Book
- Enter quantity and due date via form.
- Quantity cannot exceed available copies.
- UI updates automatically after borrowing.
- Redirects to a borrow summary view.

### 📊 Borrow Summary
- View all borrowed books in an aggregated format.
- Columns: Book Title, ISBN, Total Quantity Borrowed.

### 💅 UI/UX
- Built with **Tailwind CSS** and **Shadcn UI** for clean and accessible components.
- Fully responsive and mobile-friendly layout.
- Toast notifications for actions (add, update, delete, borrow).

---

## 🧰 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Routing:** React Router v7
- **State Management:** Redux Toolkit + RTK Query
- **Forms & Validation:** React Hook Form, Zod
- **Date Management:** date-fns
- **UI Framework:** Shancn UI
- **Notifications:** SweetAlert2, Sonner

---

## ⚙️ Installation

```bash
git clone https://github.com/habibur5313/simple-library-management-front-end-using-react-redux-typescript.git
cd libraryhub
npm install
````

---

## 🚀 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build production version
npm run preview     # Preview built version
npm run lint        # Lint the project
```

---

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # RTK Query slices and API logic
├── pages/            # Main route components
├── routes/           # Route definitions
├── types/            # TypeScript interfaces and types
├── utils/            # Utility functions
└── main.tsx          # Application entry point
```

---

## 📖 Usage Guide

### Routes

| Route             | Description                       |
| ----------------- | --------------------------------- |
| `/books`          | List all books                    |
| `/add-book`       | Add a new book                    |
| `/books/:id`      | View book details                 |
| `/borrow-summary` | Aggregated list of borrowed books |

---

## 🌐 API Integration

LibraryHub consumes APIs hosted on:

🔗 **Live API Base URL**: `https://simplelibrarymanagement.vercel.app/api`

| Endpoint          | Method | Description                     |
| ----------------- | ------ | ------------------------------- |
| `/books`          | GET    | Retrieve all books   |
| `/books/:id`      | GET    | Get book by ID                  |
| `/books`          | POST   | Create a new book               |
| `/books/:id`      | PUT    | Update a book                   |
| `/books/:id`      | DELETE | Delete a book                   |
| `/borrow`         | POST   | Borrow a book                   |
| `/borrow-summary` | GET    | Fetch aggregated borrow summary |

> Backend built using **Express.js**, **Mongoose**, and **TypeScript** following MVC architecture.
> View the backend: [GitHub Repo](https://github.com/habibur5313/simple-library-management-back-end-using-express-mongoose-and-typescript)

---

## 🧩 UI Components

Built with accessibility and reusability in mind using:

* **Radix UI Primitives**
* **Lucide Icons**
* **SweetAlert2** for confirmation dialogs
* **Sonner** for toast notifications

---

## 💡 Examples

* Optimistic UI on edits and deletes
* Responsive grid for books
* Toast notifications on create/update/delete
* Validation via Zod schemas for form safety

---

## 🐞 Troubleshooting

* Confirm backend is running or deployed correctly
* Ensure `VITE_API_BASE_URL` in `.env` is set to:

  ```
  VITE_API_BASE_URL=https://simplelibrarymanagement.vercel.app/api
  ```
* Use browser dev tools to monitor API request failures
* Rebuild and restart dev server if types or routes fail

---

## 👨‍💻 Contributors

Made with ❤️ by:

* [Habibur Rahman](https://github.com/habibur5313)

---
