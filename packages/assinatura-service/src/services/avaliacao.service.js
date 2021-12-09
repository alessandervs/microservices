const Avaliacao = require("../model/Avaliacao");
const Filme = require("../model/Avaliacao")

module.exports = {
  name: "avaliacao-service",
  version: 1,
  dependencies: [
    "v1.catalogo-service"
  ],
  actions: {
    async avaliar(ctx) {
      const idFilme = ctx.params.idFilme;
      const nota = ctx.params.nota;

      const exists = await ctx.call("v1.catalogo-service.exists", {
        id: idFilme
      });

      if (!exists) {
        throw "O filme informado não existe!";
      }

      if (nota < 0 || nota > 5) {
        throw "A nota deve ser entre 0 e 5";
      }

      return Avaliacao.create({
        idFilme, nota
      });
    }
  }
}