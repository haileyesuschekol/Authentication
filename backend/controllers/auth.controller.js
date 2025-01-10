import bcrypt from "bcryptjs"
import { User } from "../models/user.model.js"
import { generateVerificationCode } from "../utils/verificationCode.js"
import { generateJwtAndParseToCookie } from "../utils/generateJwtAndParseToCookie.js"

const signup = async (req, res) => {
  const { email, password, name } = req.body
  try {
    //check the fields {email, password, name}
    if (!email || !password || !name) {
      throw new Error("Please fill the form!")
    }

    const userAlreadyExist = await User.findOne({ email })

    //check if user exist
    if (userAlreadyExist) {
      throw new Error("User already exists!")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    //generate verification code
    const verificationCode = generateVerificationCode()

    const user = new User({
      email,
      password: hashPassword,
      name,
      verificationToken: verificationCode,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24hr
    })

    await user.save()

    //generate jwt and parse to cookie
    generateJwtAndParseToCookie(res, user._id)

    //response except password
    res.status(201).json({
      user: {
        ...user._doc,
        password: undefined,
      },
    })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}

const login = async (req, res) => {
  res.send("login")
}

const logout = async (req, res) => {
  res.send("logout")
}

export { signup, login, logout }
