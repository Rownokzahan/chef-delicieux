import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Chef from './pages/Chef.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs`)
      },

      {
        path: "/chef/:id",
        element: <Chef />,
        loader: ({params}) => fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs/${params.id}`)
      },

      {
        path: "/login",
        element: <Login />
      },

      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
