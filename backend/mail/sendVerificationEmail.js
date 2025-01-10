import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplet.js"
import { client, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationCode) => {
  const recipient = [{ email }]

  try {
    if (email) {
      const response = await client.send({
        from: sender,
        to: recipient,
        subject: "Verifiy your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace(
          "{verificationCode}",
          verificationCode
        ),
      })
    } else {
      throw new Error("Error while sending email")
    }
  } catch (error) {
    console.log("error happening while sending email", error)
  }
}
