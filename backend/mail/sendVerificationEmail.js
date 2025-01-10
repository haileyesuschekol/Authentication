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
      throw new Error("Error while sending verification email")
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
    console.log("error happening while sending verification email", error)
  }
}

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }]

  try {
    if (email) {
      const response = await client.send({
        from: sender,
        to: recipient,
        template_uuid: "16896d24-dd88-463b-be1c-e4230957fa09",
        template_variables: {
          company_info_name: "Lets Auth",
          name: name,
        },
      })
    } else {
      throw new Error("Error while sending welcome email")
    }
  } catch (error) {
    console.log(error)
  }
}
