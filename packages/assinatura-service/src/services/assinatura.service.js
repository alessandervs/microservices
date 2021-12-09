const Assinatura = require("../model/Assinatura");
//const Filme = require("../model/Avaliacao")

module.exports = {
  name: "assinatura-service",
  version: 1,
 
  actions: {
    async create(ctx) {
      const nome = ctx.params.nome;
      const cpf = ctx.params.cpf;


      if (cpf.length < 11 || cpf.length > 11) {
        throw "Favor informar um CPF com 11 caracteres, sem '.' e sem '-'.";
      }

      return Assinatura.create({
        nome, cpf
      });
    },
    list: {
      async handler(ctx) {
        console.log("esse serviço foi chamado");
        return await Assinatura.find().select('_id nome');
      }
    },

    exists: {
      async handler(ctx) {
        if (ctx.params) {
          if (ctx.params.id) {
            return await Assinatura.exists({
              _id: ctx.params.id
            });
          }
        }

        return false;
      }
    }
  }
}