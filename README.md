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

```
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

```

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yeaminstudent5598/library-client.git
cd library-management-client
```
---
### 2. Install Dependencies

```bash
npm install
```
---

### 3. Setup Environment Variables
Create a .env file in the root directory and add:

```bash
VITE_API_BASE_URL=https://your-backend-domain.com/api
```
---

### 4. Run the Development Server

```bash
npm run dev
```
---

### 🧪 Available Scripts

```bash
npm run dev       # Start local development server
npm run build     # Create production build
npm run preview   # Preview production build
```
# Library Management System (Frontend)

## 📄 Deployment
This frontend project can be deployed on hosting platforms like Netlify, Vercel, or Firebase Hosting.

### ✅ Netlify Example:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist/`
- **Environment Variables:** Add `VITE_API_BASE_URL` from `.env` in Netlify settings.

## 🌟 Bonus Features Implemented

| Feature                  | Status |
|--------------------------|--------|
| Optimistic UI Updates    | ✅     |
| Toast Notifications      | ✅     |
| Responsive Design        | ✅     |
| Type-Safe Forms          | ✅     |

## 👨‍💻 Author
**Yeamin Madbor**  
📍 Shariatpur, Bangladesh  
📧 yeaminstudent5598@gmail.com  
🌐 [Portfolio](https://glittering-halva-b2861e.netlify.app/)

## 📜 License
This project is licensed under the **MIT License**. Feel free to use it for learning or personal purposes.

## 📂 Backend Repository
You can find the backend source code here:  
🔗 [https://github.com/yeaminstudent5598/library-api.git](https://github.com/yeaminstudent5598/library-api.git)

## 🙏 Acknowledgments
This project was built as part of a web development assignment to demonstrate:

- 🔧 RTK Query & Redux Toolkit integration
- 📦 React + TypeScript modular architecture
- 🌐 RESTful API communication
- 🎨 Clean UI/UX using Tailwind CSS
- 📁 Best practices in component organization




