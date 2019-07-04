// Plain JS file used to test mqtt scripts
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
  client.subscribe('/temperature/#', function (err) {
    if (!err) {
      client.publish(
        '/temperature/test',
        JSON.stringify({
          source: 'BEDROOM1',
          value: 72,
          dateTime: 1560646835228
        })
      );
    }
  });
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
