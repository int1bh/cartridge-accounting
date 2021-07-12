const {Schema, model} = require('mongoose')

const schema = new Schema({
    modelName: {type: String, required: true},
    count: {type: Number, required: true},              //количество удаленных
    dateTrash: {type: Date, default: Date.now()},       //дата удаления
}, {versionKey: false})


module.exports = model('TrashHistory', schema)