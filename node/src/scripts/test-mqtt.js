// Plain JS file used to test mqtt scripts
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

client.on('connect', function () {
  client.subscribe('/temperature/#', function (err) {
    if (!err) {
      client.publish(
        '/home/hvac/test-01',
        JSON.stringify({
          temperatureValue: 72,
          humidityValue: -1,
          dateTime: 12000
        })
      );
      client.publish(
        '/home/hvac/test-01',
        JSON.stringify({
          temperatureValue: 72,
          humidityValue: -1,
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
