export default function handler(req, res) {
  let error = null
  // main(req.body).catch((err) => (err = error))
  res.status(200).json({ name: 'John Doe', error })
}
