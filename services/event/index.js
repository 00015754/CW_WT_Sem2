const fs = require('fs')

const events = require('../../data/db.json')
console.log(events)

const event_service = {
    getAll() {
        return events
    }
}

module.exports = event_service
