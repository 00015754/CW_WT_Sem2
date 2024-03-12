const fs = require('fs');
const events = require(global.db);

const event_service = {
    getAll() {
        return events
    }
}

module.exports = event_service