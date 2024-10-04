const express = require("express")
const courses = require("./routes/course")
const home = require("./routes/home")
const Joi = require("joi")
const app = express()
// const morgan = require("morgan")

app.use(express.json())

app.use("/api/courses", courses)
app.use("/", home)

// app.use(morgan("tiny"))

app.listen(3000, () => {
  console.log("3000 ...")
})
