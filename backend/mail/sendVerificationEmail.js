import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplet.js"
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
        category: "verify email",
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
        category: "send welcome email",
      })
    } else {
      throw new Error("Error while sending welcome email")
    }
  } catch (error) {
    console.log(error)
  }
}

export const sendResetPassword = async (email, resetUrl) => {
  const recipient = [{ email }]

  try {
    if (email) {
      const response = await client.send({
        from: sender,
        to: recipient,
        subject: "Reset your password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE,
        category: "password reset success",
      })
    } else {
      throw new Error("Error while sending welcome email")
    }
  } catch (error) {
    console.log(error)
  }
}

export const passwordResetSuccessEmail = async (email, resetUrl) => {
  const recipient = [{ email }]

  try {
    if (email) {
      const response = await client.send({
        from: sender,
        to: recipient,
        subject: "Password reset successfully",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{resetURL}", resetUrl),
        category: "password reset success",
      })
    } else {
      throw new Error("Error while sending welcome email")
    }
  } catch (error) {
    console.log(error)
  }
}
