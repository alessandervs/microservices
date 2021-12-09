const { ServiceBroker } = require("moleculer");
const mongoose = require("mongoose");
require("dotenv/config");

(async () => {
  const url = process.env.URL_MONGODB;
  await mongoose.connect(url);
  
  const broker = new ServiceBroker({
    transporter: "TCP"
  });

  broker.loadServices("./src/services");

  broker.start().then(() => {
    // Switch to REPL mode
    broker.repl();
  });

})()