const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    modelName: { type: String, required: true, unique: true },        //модель картриджа
    color: { type: String, required: true },                          //цвет картриджа
    printers: [String],                                               //где используется
  },
  { versionKey: false }
);

module.exports = model("CartridgeModel", schema);
