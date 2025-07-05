// src/main.tsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import routes from "./routes/routes";
import { store } from "./app/store";
import ReactDOM from "react-dom/client"; 
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={routes}/>
      <Toaster position="top-center" />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
