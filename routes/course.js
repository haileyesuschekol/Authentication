const express = require("express")

const router = express.Router()

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
]

router.get("/", (req, res) => {
  res.send(courses)
})

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) return res.send("404 | not-found").status(404)

  res.send(course)
})

router.post("/", (req, res) => {
  //validate request
  validateCourse(req.body)

  const course = { id: courses.length + 1, name: req.body.name }
  courses.push(course)
  res.send(course)
})

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) return res.send("404 | not-found").status(404)

  //validate request
  validateCourse(req.body)

  course.name = req.body.name
  res.send(course)
})

router.delete("/:id", (req, res) => {
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

module.exports = router
