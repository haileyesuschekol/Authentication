import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"

dotenv.config()

const token = process.env.MAILTRAP_TOKEN
const endpoint = process.env.MAILTRAP_ENDPOINT

export const client = new MailtrapClient({
  token,
  endpoint,
})

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Lets-Auth",
}
