const { ServiceBroker } = require("moleculer");
const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb+srv://guilherme:workshop@ebac-workshop.dtenm.mongodb.net/catalogo?retryWrites=true&w=majority");

  const broker = new ServiceBroker({
    transporter: "TCP"
  });

  broker.loadServices("./src/services");

  broker.start().then(() => {
    // Switch to REPL mode
    broker.repl();
  });

})()