import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppProvider from './contexts/context';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        // children: [
        //     {
        //         path: '/about',
        //         element: <About />,
        //     },
        // ],
        errorElement: <Error />,
    },
    {
        path: '/product/:id',
        element: <SingleProduct />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <AppProvider>
            <RouterProvider router={router} />
        </AppProvider> */}
    </React.StrictMode>,
);
