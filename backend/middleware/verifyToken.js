import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
  //get cookies
  const token = req.cookies.token

  try {
    //check if there is cookie
    if (!token) {
      throw new Error("Unauthorized - no token provided")
    }
    //decode jwt
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //check if token is valid
    if (!decoded) {
      throw new Error("Unauthorized - invalid token")
    }

    //sign req.User to token and pass to next route
    req.userId = decoded.userId
    next()
  } catch (error) {
    //response if failed
    res.status(401).json({ success: false, message: error.message })
  }
}
