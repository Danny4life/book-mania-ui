import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/signup/Signup"



function App() {


  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route index="/" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
