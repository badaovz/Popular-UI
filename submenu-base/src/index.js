import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import SubmenuProvider from './contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SubmenuProvider>
            <App />
        </SubmenuProvider>
    </React.StrictMode>,
);
