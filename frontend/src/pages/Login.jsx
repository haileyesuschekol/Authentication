import { motion } from "framer-motion"
import Input from "../components/Input"
import { Lock, Mail, Loader } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const { login, loading, error } = useAuthStore()

  const handleLogin = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-green-700 border-t-4 max-w-md w-full  rounded-zxl shadow-xl overflow-hidden "
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Sign in
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-1">
            <Link
              to="/forgot-password"
              className="text-sm text-green-900 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {error && <p className="text-red-600 font-semibold  mb-2">{error}</p>}

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-green-500 text-white
          font-bold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none
        transition duration-200"
            whileHover={{ Scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={loading}
            onClick={handleLogin}
          >
            {loading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-100 flex justify-center">
        <p className="text-base text-gray-900">Don&apos;t have an account?</p>
        <Link
          to={"/signup"}
          className="text-base ml-1 text-gray-900 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </motion.div>
  )
}

export default Login
