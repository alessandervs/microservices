const ApiService = require("moleculer-web");

module.exports = {
  name: "api-gateway",
  version: 1,
  mixins: [ApiService],
  settings: {
    routes: [
      {
        path: "/api",
        aliases: {
          "POST /catalogo": "v1.catalogo-service.create",
          "GET /catalogo": "v1.catalogo-service.list",
          "POST /avaliacao/:idFilme": "v1.avaliacao-service.avaliar"
        }
      }
    ]
  }
}