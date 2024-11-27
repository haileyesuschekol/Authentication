require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()
const notFoundMiddleware = require("./middleware/page-notfound")
const sendEmail = require("./controllers/sendEmail")

app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send('<h1>Email Project</h1> <br> <a href="/send">Send</a>')
})

app.get("/send", sendEmail)

app.use(notFoundMiddleware)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))
