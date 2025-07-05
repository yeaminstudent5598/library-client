# 📚 Library Management System – Frontend

This is the **Frontend Client** for the Minimal Library Management System project, built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. This web application allows users to view, add, edit, delete, and borrow books, as well as view a summary of borrowed books.

> 🔗 **Live Site**: [https://your-frontend.netlify.app](https://your-frontend.netlify.app)  
> 🔗 **Backend Repository**: [GitHub Link](https://github.com/your-username/library-management-backend)

---

## 🚀 Features

- ✅ View all books in a responsive table layout
- ✅ Add new books with type-safe forms
- ✅ Edit existing book details with live updates
- ✅ Delete books with confirmation
- ✅ Borrow books with quantity and due date
- ✅ View a borrow summary (aggregated report)
- ✅ Optimistic UI updates for smoother UX
- ✅ Toast notifications (success & error)
- ✅ Clean modular codebase
- ✅ Fully responsive across devices

---

## 🧪 Tech Stack

| Tool             | Purpose                         |
|------------------|----------------------------------|
| React            | Frontend Library                |
| TypeScript       | Type Safety                     |
| Redux Toolkit    | Global State Management         |
| RTK Query        | Data Fetching & Caching         |
| Tailwind CSS     | UI Styling                      |
| React Router DOM | Client-side Routing             |
| Vite             | Build Tool for React + TS       |

---

## 📁 Folder Structure

src/
├── app/ # Redux store & RTK Query API setup
│ └── features/
│ └── books/ # bookApi.ts for API calls
│
├── components/ # Reusable UI components
│ └── book/ # Modals: Create, Edit, Borrow
│
├── pages/ # Page components (Books, BorrowSummary, etc.)
├── routes/ # React Router configuration
├── App.tsx # Main layout with router outlet
└── main.tsx # Application entry point


---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-client.git
cd library-management-client

```bash
npm install
VITE_API_BASE_URL=https://your-backend-domain.com/api

4. Run the Development Server
```bash
npm run dev
