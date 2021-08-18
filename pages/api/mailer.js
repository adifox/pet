const nodemailer = require('nodemailer')

async function main({ email, message, name }) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.USER_EMAIL, // sender address
    to: `${process.env.USER_EMAIL}, ${email}`, // list of receivers
    subject: name, // Subject line
    text: message, // plain text body
    // html: '<b>Hello world?</b>', // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  return info
}

export default function handler(req, res) {
  let error = {
    hola: 'test, test',
  }
  let response = null
  main(req.body)
    .then((res) => {
      response = res
    })
    .catch((err) => {
      error.server = err
    })
  res.status(200).json({ name: 'John Doe', next: { ...error, ...response } })
}
