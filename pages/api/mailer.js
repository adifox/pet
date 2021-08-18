const nodemailer = require('nodemailer')

async function main({ email, message, name }) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: 'info@petexcellenttreatment.com',
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'info@petexcellenttreatment.com', // sender address
    to: `'info@petexcellenttreatment.com', ${email}`, // list of receivers
    subject: name, // Subject line
    text: message, // plain text body
    // html: '<b>Hello world?</b>', // html body
  })

  return info
}

export default async function handler(req, res) {
  const mailServerResponse = await main(req.body)

  res.status(200).json({ mailerResponse: mailServerResponse })
}
