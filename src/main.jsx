import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Import all your components
import RootLayout from './RootLayout';
import HomePage from './components/home/home.jsx';
import AboutPage from './components/about/about.jsx';
import ProjectsPage from './components/projects/project.jsx'; // 👈 Add this
import ContactPage from './components/contact/contact.jsx';   // 👈 Add this

// Define all the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // Home page at '/'
        element: <HomePage />,
      },
      {
        path: 'about', // About page at '/about'
        element: <AboutPage />,
      },
      {
        path: 'projects', // Projects page at '/projects'
        element: <ProjectsPage />,
      },
      {
        path: 'contact', // Contact page at '/contact'
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);