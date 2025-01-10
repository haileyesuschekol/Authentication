import express from "express"
import dotenv from "dotenv"

import connectDb from "./db/connectDb.js"
import authRoute from "./routes/auth.route.js"

const app = express()
dotenv.config()

app.use("/api/v1/auth", authRoute)

app.get("/", (req, res) => {
  res.send("API is Running ...")
})

const port = process.env.PORT
app.listen(port, () => {
  console.log("server is running in", port)
  connectDb()
})
