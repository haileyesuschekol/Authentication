import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDb from "./db/connectDb.js"
import authRoute from "./routes/auth.route.js"

const app = express()
dotenv.config()

app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(express.json()) // to parse req.body
app.use(cookieParser()) //to parse cookie

app.use("/api/v1/auth", authRoute)

app.get("/", (req, res) => {
  res.send("API is Running ...")
})

const port = process.env.PORT
app.listen(port, () => {
  console.log("server is running in", port)
  connectDb()
})
