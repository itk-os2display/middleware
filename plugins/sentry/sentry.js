/**
 * @file
 * Provide core http services by using express.
 */
module.exports = function (options, imports, register) {
  "use strict";

  // Get connected to the logger
  var logger = imports.logger;

  var raven = require('raven');

  // Connect to sentry server and send all exceptions.
  var client = new raven.Client('https://a8703133ddc845b09f99d1f03c0b0db8@app.getsentry.com/41301');
  client.patchGlobal();

  logger.info('Start the sentry connection.');

  // Register exposed function with architect.
  register(null, { });
};
