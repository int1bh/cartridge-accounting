const {Schema, model} = require('mongoose')

const schema = new Schema({
    divisionName: {type: String, required: true, unique: true},
    address: {type: String, required: true}
}, {versionKey: false})


module.exports = model('Subdivision', schema)