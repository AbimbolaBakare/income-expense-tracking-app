import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthProvider } from "./Authentication";
import { ToastProvider } from 'react-toast-notifications'



ReactDOM.render(
    <AuthProvider>
        <ToastProvider>
            <App />
        </ToastProvider>
    </AuthProvider>,
    document.getElementById('root')
)