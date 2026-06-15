import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
import TaskProvider from './context/TaskContext.jsx'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from './context/ThemeContext.jsx'
import NotificationProvider from './context/NotificationContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <AuthProvider>
      <TaskProvider>
        <NotificationProvider>
        <Toaster position='top-right'/>
        <App />
        </NotificationProvider>
      </TaskProvider>
    </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
