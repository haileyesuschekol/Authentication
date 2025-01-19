import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./db/connectDb.js"
import authRoute from "./routes/auth.route.js"

// Recreate __dirname
const __dirname = path.resolve()

const app = express()
dotenv.config()

app.use(express.json()) // to parse req.body
app.use(cookieParser()) //to parse cookie

app.use("/api/v1/auth", authRoute)

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.join(__dirname, "frontend/dist")))

  //any route that is not api will be redirected to index.html
  app.get(
    ("*",
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend/dist", "index.html"))
    })
  )
} else {
  app.get("/", (req, res) => {
    res.send("Api is running ....")
  })
}

const port = process.env.PORT
app.listen(port, () => {
  console.log("server is running in", port)
  connectDb()
})
