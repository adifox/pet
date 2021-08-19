const nodemailer = require('nodemailer')

async function main({ email, message, name }) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: process.env.USER_EMAIL,
    subject: name, // Subject line
    text: message, // plain text body
    // to: `info@petexcellenttreatment.com, ${email}`, // list of receivers
    // html: '<b>Hello world?</b>', // html body
  })

  return info
}

export default async function handler(req, res) {
  const mailServerResponse = await main(req.body)

  res.status(200).json({ mailerResponse: mailServerResponse })
}
