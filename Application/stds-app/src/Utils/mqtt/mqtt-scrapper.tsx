const mqtt = require('mqtt');

const client  = mqtt.connect('mqtt://iot.iut-blagnac.fr')


client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})

