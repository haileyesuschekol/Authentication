const express = require("express")
const Joi = require("joi")
const app = express()
app.use(express.json())

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
]

app.get("/", (req, res) => {
  res.send("Home")
})

app.get("/api/courses", (req, res) => {
  res.send(courses)
})

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) return res.send("404 | not-found").status(404)

  res.send(course)
})

app.post("/api/courses", (req, res) => {
  //validate request
  validateCourse(req.body)

  const course = { id: courses.length + 1, name: req.body.name }
  courses.push(course)
  res.send(course)
})

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) return res.send("404 | not-found").status(404)

  //validate request
  validateCourse(req.body)

  course.name = req.body.name
  res.send(course)
})

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) return res.send("404 | not-found").status(404)

  const index = courses.indexOf(course)
  courses.splice(index, 1)

  res.send(courses)
})

//validator
function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().max(20).min(1).required(),
  })
  const result = schema.validate(course)
  if (result.error) return res.send(result.error.details[0].message).status(400)
}

app.listen(3000, () => {
  console.log("3000 ...")
})
