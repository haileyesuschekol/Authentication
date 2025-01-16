import { Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import EmailVerification from "./components/EmailVerification"

function App() {
  return (
    <div className=" min-h-screen flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
