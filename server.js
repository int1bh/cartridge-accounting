const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use('/api/', require('./routes/cartridge.routes'))
app.use('/api', require('./routes/subdivision.routes'))

const PORT = config.get('port') || 5000


async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
      })
        app.listen(PORT, () => console.log(`App has been running on port ${PORT}`))
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}

start()


