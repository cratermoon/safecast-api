# safecast-api

> Safecast API is a node.js client library for [safecast REST APIs](https://api.safecast.org).

## Install

```bash
npm install safecast-api
```

## Usage

```
var safecast = require('safecast-api');

safecast.getMeasurements(0,0,1,function(measurements) {
  measurements.forEach(function (measurement) {
    var reading = util.format("Reading %d: %d %s near %d %d on %s",
                               measurement.id,
                               measurement.value,
                               measurement.unit,
                               measurement.latitude,
                               measurement.longitude,
                               measurement.captured_at);
    console.log(reading);
  });
});
```

## Tests

`npm test`

## Contributing

Safecast users that have an account should test the POST functions.

## TODO ##

* Support POST features
* Add support for i18n/l10n endpoints

----
> &copy; Steven E. Newton &nbsp;&middot;&nbsp;
> License: [ISC](https://opensource.org/licenses/ISC) &nbsp;&middot;&nbsp;
> Github: [@cratermoon](https://github.com/cratermoon)
