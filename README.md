# 📚 Library Management System — Frontend (Client)

এই প্রজেক্টটি হলো **Frontend** অংশ, যা React, TypeScript, Redux Toolkit Query, এবং Tailwind CSS দিয়ে তৈরি করা হয়েছে। এখানে ইউজাররা বই দেখতে, যোগ করতে, সম্পাদনা করতে, মুছতে এবং ধার নিতে পারবে। এছাড়াও ধার নেওয়া বইয়ের সারাংশ দেখানো হয়েছে।

> 🔗 Live Demo: [Click here to visit the frontend](https://your-frontend.vercel.app)

---

## 🛠️ Technologies Used

| Tech             | Description              |
|------------------|--------------------------|
| React            | Frontend library         |
| TypeScript       | Type safety              |
| Redux Toolkit    | State management         |
| RTK Query        | API calls and caching    |
| Tailwind CSS     | Styling                  |
| React Router DOM | Client-side routing      |

---

## ⚙️ Features

- ✅ View all books in a table  
- ✅ Add a new book  
- ✅ Edit book details  
- ✅ Delete a book with confirmation  
- ✅ Borrow a book  
- ✅ Show borrow summary  
- ✅ Minimal clean UI  
- ✅ Responsive design  
- ✅ Toast notifications for feedback  
- ✅ Optimistic UI updates

---

## 🧩 Folder Structure

src/
├── app/ # Redux store and API setup
│ └── features/books/ # RTK Query API for books
├── components/ # Reusable UI components
│ └── book/ # Book related modals: Create, Edit, Borrow
├── pages/ # Page components (Books, Summary)
├── routes/ # Route definitions
├── App.tsx # Main app layout and routing
└── main.tsx # Application entry point

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yeaminstudent5598/library-client.git
cd library-client
npm install
VITE_API_BASE_URL=https://your-backend.onrender.com/api
