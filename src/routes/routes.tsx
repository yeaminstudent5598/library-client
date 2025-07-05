import App from "@/App";
import Books from "@/pages/Books";
import Borrow from "@/pages/BorrowBookModal";
import BorrowSummary from "@/pages/BorrowSummary";
import CreateBook from "@/pages/CreateBook";
import EditBook from "@/pages/EditBookModal";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },          
      { path: "/books", element: <Books /> },
      { path: "/create-book", element: <CreateBook /> },
      { path: "/edit-book/:id", element: <EditBook /> },
      { path: "/borrow/:id", element: <Borrow /> },
      { path: "/books/borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);

export default routes;
