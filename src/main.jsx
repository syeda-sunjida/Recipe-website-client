
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
// import AuthProvider from './Providers/AuthProvider';
import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';
// import App from './App';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path: '/',
      element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/Navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);