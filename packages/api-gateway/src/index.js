const { ServiceBroker } = require("moleculer");

(async () => {

  const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
      strategy: "Random"
    }
  });

  broker.loadServices("./src/services");

  broker.start().then(() => {
    // Switch to REPL mode
    broker.repl();
  });

})()