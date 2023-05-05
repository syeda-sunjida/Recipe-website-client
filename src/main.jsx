
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

import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';
import OurChef from './Components/OurChef';
import ChefCard from './Components/ChefCard';
import RecipeCard from './Components/RecipeCard';
import Recipes from './Components/Recipes';
import ExtraOne from './Components/ExtraOne';
import PrivateRoute from './Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path: '/',
      element: <Home></Home>,
        loader: async () => {
          try {
            

            const chefsData = await fetch('https://bangali-recipe-server-syeda-sunjida.vercel.app/all');
            const chefs = await chefsData.json();
            // console.log(chefsData)
    
    
            return {
              
              chefs: chefs,
            };
          } catch (err) {
            console.log(err);
          }
        }
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
        path: '/ourChef',
        element: <OurChef></OurChef>
      },
      {
        path: '/chefCard',
        element: <ChefCard></ChefCard>
      },
      {
        path: '/recipeCard',
        element: <RecipeCard></RecipeCard>
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader : ({params})=> fetch(`https://bangali-recipe-server-syeda-sunjida.vercel.app/all/${params.id}`)
      },
      {
        path: '/extraone',
        element: <ExtraOne></ExtraOne>
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