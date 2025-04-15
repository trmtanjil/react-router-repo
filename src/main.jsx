import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Hoom from './components/Hoom/Hoom.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Contact from './components/Contact/Contact.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
     children:[
     {index:true, Component:Hoom},
     {path:'mobiles',Component:Mobiles},
     {path:'contact',Component:Contact},
     ]

  },
  {
    path:'about',
    element: <div>about me section</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
