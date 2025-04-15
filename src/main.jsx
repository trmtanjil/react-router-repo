import { StrictMode, Suspense } from 'react'
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
import Laptop from './components/Laptop/Laptop.jsx';
import Chasma from './components/Chasma/Chasma.jsx';
import Users from './components/Users/Users.jsx';
import SideProdunt from './components/SideProduct/SideProdunt.jsx';
import Users2 from './components/Users2/Users2.jsx';
import User from './components/User/User.jsx';
import UserDtails from './components/UsersDtails/UserDtails.jsx';

import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';


const users2Data = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
     children:[
     {index:true, Component:Hoom},
     {path:'mobiles',Component:Mobiles},
     {path:'contact',Component:Contact},
     {path:'laptop',Component:Laptop},
     {path: 'chasma',Component:Chasma},
     {path:'SideProduct',Component:SideProdunt},
     {path:'users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
       Component:Users},
     {
      path:'users2',
      element:<Suspense fallback={<p>loading....</p>}>
        <Users2 users2Data={users2Data}></Users2>
      </Suspense>
     },
     {
      path:'users/:userId',
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component:UserDtails,
     },
     {
      path:'posts',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      Component:Posts,
     },
     {
      path:'posts/:postId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component:PostDetails,
     }

      
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
