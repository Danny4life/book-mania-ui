import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/signup/Signup"
import Login from "./pages/login/Login"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/dashboard/Dashboard";



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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
