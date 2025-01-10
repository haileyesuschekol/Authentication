import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"

dotenv.config()

const token = process.env.MAILTRAP_TOKEN
const endpoint = process.env.MAILTRAP_ENDPOINT

const client = new MailtrapClient({
  token,
  endpoint,
})

const sender = {
  email: "hello@demomailtrap.com",
  name: "Lets-Auth",
}
const recipients = [
  {
    email: "demo@gmail.com",
  },
]

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error)
