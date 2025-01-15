import { motion } from "framer-motion"
import Input from "../components/Input"
import { Lock, Mail, Scale, User } from "lucide-react"
import { useState } from "react"
const Signup = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
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
          {/* {password strength meter} */}
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-green-500 text-white
          font-bold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none
        transition duration-200"
            whileHover={{ Scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Sign up
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

export default Signup
