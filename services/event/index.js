const { count } = require('console')
const fs = require('fs')

const events = require('../../data/db.json')

const event_service = {
    getAll() {
        return events
    },
    getById(id) {
        return events.find(e=> e.id == id)
    },
    create(req, res) {
        let new_id = genRanId(4)

        const event = req.body

        const new_event = {
            id: new_id,
            event:event
        }
        
        events.push(new_event)

        whiteToFile(events)

        return new_event
    },
    delete(id) {
        const index = events.findIndex(u => u.id == id)
        events.splice(index, 1)
        writeToFile(events)
    }
}

let writeToFile = async (users) => {
    await
        fs.writeFileSync(
            global.db,
            JSON.stringify(
                users, null, 4
            ),
            'utf-8'
        )
}

let genRanId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result  
}

module.exports = event_service
