const {Schema, model} = require('mongoose')

const schema = new Schema({
        city: {type: String, default: null},
        modelName: {type: String, required: true},                       //наименование картриджа
        registered: {type: Date, default: Date.now()},                   //дата регистрации картриджа
        changeDate: {type: Date, default: Date.now()},                  //дата изменения
        toSubdivision: {type: String, default: null},                   //куда выдан
        barcode: {type: String, required: true, unique: true},           //штрихкод
        issued: {type: Boolean, default: false},                         //выдан или нет. Если false, то картридж на складе
        scrapped: {type: Boolean, default: false},                      //утилизирован или нет
        empty: {type: Boolean, default: false},                         //пустые на складе
        issuedHistory: [{subdivision: {type: String, default: null},     //история выдачи
        date: {type: Date, default: Date.now()}}],                       
        toRefuel: {type: Boolean, default: false},                       //на заправке или нет
        },
{versionKey: false}
)

module.exports = model('Cartridge', schema)
