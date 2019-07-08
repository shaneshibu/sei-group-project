function errorHandler(err, req, res, next) {
  if (err.message === 'Unauthorized') return res.status(401).json({ message: 'Unauthorized' })
  if (err.name === 'TokenExpiredError') return res.status(401).json({ message: 'Token Expired' })
  if (err.message === 'Not Found') return res.status(404).json(err.message)
  if (err.name === 'CastError' && err.path === '_id') return res.status(404).json({ message: 'Not Found' })
  if (err.message === 'Empty Review') return res.status(411).json(err.message)
  if (err.name === 'ValidationError') {
    const errors = {}

    for (const field in err.errors) {
      errors[field] = err.errors[field].message
    }
    return res.status(422).json({ message: 'Unprocessable Entity', errors: errors })
  }
  if (err.message === 'Unprocessable Entity') return res.status(422).json(err.message)

  res.status(500).json(err.message)
  next(err)
}

module.exports = errorHandler
