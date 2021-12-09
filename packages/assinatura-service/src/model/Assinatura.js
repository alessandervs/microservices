const mongoose = require("mongoose");

const schema = mongoose.Schema({
  nome: String,
  cpf: Number
});

module.exports = mongoose.model("Assinatura", schema);