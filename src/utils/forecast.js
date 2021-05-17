const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=837ce8e0464f18b57c2fa10edf6982f3&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find loacation!', undefined);
    } else {
      callback(undefined, {
        description: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out and the humidity is ${body.current.humidity}%.`,
        icon: body.current.weather_icons,
      });
    }
  });
};

module.exports = forecast;
