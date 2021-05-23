const events = require('../../events-pool');
const handlers = require('./eye-lid-handler');

events.on('light', handlers.lightEyeLidHandler)
