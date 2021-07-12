const {Schema, model} = require('mongoose')

const schema = new Schema({
        modelName: {type: String, required: true},                       //наименование картриджа
        registered: {type: String, default: Date.now().toLocaleString()},                   //дата регистрации картриджа
        barcode: {type: String, required: true, unique: true},           //штрихкод
        issued: {type: Boolean, default: false},                         //выдан или нет. Если false, то картридж на складе
        issuedHistory: [{subdivision: {type: String, default: null},     //история выдачи
        date: {type: Date, default: Date.now()}}],                       
        toRefuel: {type: Boolean, default: false},                       //на заправке или нет
        },
{versionKey: false}
)

module.exports = model('Cartridge', schema)
