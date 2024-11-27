require("dotenv").config()
const nodemailer = require("nodemailer")

const sendEmail = async (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message)
      return process.exit(1)
    }
  })
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  })

  let mailOptions = {
    from: '"Sender Name" <sender@example.com>',
    to: "recipient@example.com",
    subject: "Hello",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  }

  const information = transporter.sendMail(mailOptions, (error, info) => {
    try {
      if (error) {
        return console.log(error)
      }
      console.log("Message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
      res.status(200).json({ msg: "Mail sent successfuly", info })
    } catch (error) {
      res.status(400).json(error)
    }
  })
  //   })
}

module.exports = sendEmail
