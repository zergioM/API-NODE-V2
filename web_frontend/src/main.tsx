import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <Toaster
         richColors
         position='top-right'/>
    </AuthProvider>
  </React.StrictMode>,
)

