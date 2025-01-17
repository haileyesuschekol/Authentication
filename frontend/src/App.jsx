import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import EmailVerification from "./components/EmailVerification"
import { useAuthStore } from "./store/authStore"
import { useEffect } from "react"
import Home from "./pages/Home"
import LoadingSpinner from "./components/LoadingSpinner"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />
  }

  return children
}

// redirect authenticated users to the home page
const RedirectAuthUserToHome = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore()

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth) {
    return <LoadingSpinner />
  }

  return (
    <div className=" min-h-screen flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthUserToHome>
              <Signup />
            </RedirectAuthUserToHome>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthUserToHome>
              <Login />
            </RedirectAuthUserToHome>
          }
        />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthUserToHome>
              <ForgotPassword />
            </RedirectAuthUserToHome>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthUserToHome>
              <ResetPassword />
            </RedirectAuthUserToHome>
          }
        />
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
