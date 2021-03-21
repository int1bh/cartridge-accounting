const {Schema, model} = require('mongoose')

const schema = new Schema({
        modelName: {type: String, required: true},                       //наименование картриджа
        registered: {type: Date, default: Date.now()},                   //дата регистрации картриджа
        inStock: {type: Boolean, default: true},                         //на складе или нет
        toRefuel: {type: Boolean, default: false},                       //на заправке или нет
        issued: {type: Boolean, default: false},                         //выдан или нет
        subdivision: {type: String, default: null},                      //подразделение выдачи
        issuedDate: {type: Date, default: null}                          //дата выдачи
     },
{versionKey: false}
)

module.exports = model('Cartridge', schema)