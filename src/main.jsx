import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
