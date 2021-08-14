const {Schema, model} = require('mongoose')

const schema = new Schema({
    city: {type: String, default: null},
    divisionName: {type: String, required: true, unique: true},
    address: {type: String, required: true}
}, {versionKey: false})


module.exports = model('Subdivision', schema)