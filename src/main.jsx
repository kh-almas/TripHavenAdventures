import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./Route/Route.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import LoaderProvider from "./Provider/LoaderProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <LoaderProvider>
              <RouterProvider router={router} />
          </LoaderProvider>
      </AuthProvider>
  </React.StrictMode>
)
