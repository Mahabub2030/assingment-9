import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css'
import { ToastContainer} from 'react-toastify';
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer 
       autoClose={2000}
      />
    </AuthProvider>
  </StrictMode>,
)
