/**
 * {{projectName}}
 * Copyright (c) {{year}} {{fullName}} (https://github.com/{{username}}/{{projectName}})
 */

"use strict";

module.exports = {
  name: "{{serviceName}}",

  /**
   * Settings
   */
  settings: {

  },

  /**
   * Actions
   */
  actions: {
    test(ctx) {
      return `Hello from {{projectName}}, ${ctx.params.name || "Anonymous"}!`;
    }
  },

  /**
   * Methods
   */
  methods: {

  },

  /**
   * Service lifecycle event handlers
   */
  created() {
    this.broker.logger.info("{{projectName}} Service Instance Created");
  },

  started() {
    this.broker.logger.info("{{projectName}} Service Instance Started");
  },

  stopped() {
    this.broker.logger.info("{{projectName}} Service Instance Stopped");
  }
};
