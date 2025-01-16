import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Loader, Lock, Mail, User } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../components/Input"
import PasswordStrength from "../components/PasswordStrength"
import { useAuthStore } from "../store/authStore"

const Signup = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  const { signup, error, isLoading } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(email, password, name)
      navigate("/verify-email")
    } catch (error) {
      console.log(error)
    }
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
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}

          {/* password strength Checker */}
          <PasswordStrength password={password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-green-500 text-white
          font-bold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none
        transition duration-200"
            whileHover={{ Scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto size={24}"></Loader>
            ) : (
              "Sign up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-100 flex justify-center">
        <p className="text-base text-gray-900">Already have an account?</p>
        <Link
          to={"/login"}
          className="text-base ml-1 text-gray-900 hover:underline"
        >
          Login
        </Link>
      </div>
    </motion.div>
  )
}

export default Signup
