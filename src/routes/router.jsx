import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import MainLayout from '../Layout/MainLayout';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Feedback from '../pages/Feedback';
import Welcome from '../welcome/Welcome';
import SideScroll from '../Layout/SideScroll';

const routes = createBrowserRouter([
  {
    index: true, // Route for the Welcome page
    element: <Welcome />,
  },
  {
    path: '/', // Base path for MainLayout and its children
    element: <MainLayout />,
    children: [
      {
        path: 'main',
        element: <SideScroll />,
        children: [
          { path: 'home', element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contact /> },
          { path: 'gallery', element: <Gallery /> },
          { path: 'feedback', element: <Feedback /> },
        ],
      },

    ],
  },
]);

export default routes;
