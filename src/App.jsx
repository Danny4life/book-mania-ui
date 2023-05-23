import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/dashboard/Dashboard";
import ForgetPassword from "./pages/change-password/ForgetPassword";



function App() {


  return (
    <>
    <ToastContainer 
    autoClose={2000}
    hideProgressBar={false}
    position="top-right"
    theme="light"
    />
      
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/password-reset" element={<ForgetPassword />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
