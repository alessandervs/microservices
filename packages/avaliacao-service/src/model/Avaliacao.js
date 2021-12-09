const mongoose = require("mongoose");

const schema = mongoose.Schema({
  idFilme: mongoose.Schema.Types.ObjectId,
  idAssinante: mongoose.Schema.Types.ObjectId,
  nota: Number
});

module.exports = mongoose.model("Avaliacao", schema);