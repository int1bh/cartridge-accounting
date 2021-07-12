const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.use(function (req, res, next) {
    var origins = [
        'http://localhost',
        'http://localhost:3000',
        'http://localhost:5000'
    ];

    for(var i = 0; i < origins.length; i++){
        var origin = origins[i];
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/', require('./routes/cartridge.routes'))
app.use('/api/', require('./routes/subdivision.routes'))
app.use('/api/', require('./routes/cartridgeModels.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }


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


