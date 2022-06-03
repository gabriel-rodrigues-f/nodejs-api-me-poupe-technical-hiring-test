const app = require('./app')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res
  .json({ message: 'Access root path' }))

app.listen(PORT, () => process.stdout.write(`Listening on port: ${PORT}\n`))