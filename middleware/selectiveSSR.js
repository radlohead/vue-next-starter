export default function(req, res, next) {
  const paths = ['/about']

  if (paths.includes(req.originalUrl)) {
    res.spa = true
  }
  next()
}
