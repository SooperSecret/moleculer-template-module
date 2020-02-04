"use strict";

let { ServiceBroker } = require("moleculer");
let AwesomeService = require("../../index");

// Create a broker
let broker = new ServiceBroker({
  logger: console
});

// Load our service
broker.createService(AwesomeService);

// Start server
broker.start().then(() => {
  // Call an action
  broker
    .call("{{serviceName}}.test", { name: "Guy" })
    .then(broker.logger.info)
    .catch(broker.logger.error);
});
