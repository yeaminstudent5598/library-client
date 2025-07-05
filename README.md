# 📚 Library Management System – Frontend

This is the **Frontend Client** for the **Minimal Library Management System** built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. The application allows users to manage books and borrowing without requiring authentication.

> 🔗 **Live Site**: [https://library-client-side.netlify.app/](https://library-client-side.netlify.app/)  
> 🔗 **Backend Repository**: [https://github.com/yeaminstudent5598/library-api.git](https://github.com/yeaminstudent5598/library-api.git)

---

## 🚀 Features

- 📖 View all books in a responsive table
- ➕ Add a new book with a form
- ✏️ Edit existing book details
- ❌ Delete books with confirmation
- 📥 Borrow books (with quantity & due date)
- 📊 View a borrow summary (total borrow count per book)
- ⚡ Optimistic UI updates
- 🔔 Toast notifications for feedback
- 💻 Fully responsive design
- 🧼 Clean and modular codebase

---

## 🧪 Tech Stack

| Tool             | Purpose                          |
|------------------|----------------------------------|
| React            | Frontend UI framework            |
| TypeScript       | Static type checking              |
| Redux Toolkit    | State management                 |
| RTK Query        | API fetching and caching         |
| Tailwind CSS     | Utility-first CSS styling        |
| React Router DOM | Client-side routing              |
| Vite             | Fast dev server & build tool     |

---

## 📁 Folder Structure

```bash
src/
├── app/                    # Redux store & RTK Query API setup
│   └── features/
│       └── books/          # bookApi.ts for API endpoints
│
├── components/             # Reusable UI components
│   └── book/               # Modals: CreateBook, EditBook, BorrowBook
│
├── pages/                  # Pages: Books, BorrowSummary, etc.
├── routes/                 # React Router configuration
├── App.tsx                 # Main layout & route outlet
└── main.tsx                # Entry point


---

