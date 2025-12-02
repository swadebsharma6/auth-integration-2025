import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Layout/Root.jsx';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import SignUp from './components/Pages/SignUp.jsx';
import SignIn from './components/Pages/SignIn.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path: '/',
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'signin',
        Component: SignIn
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
