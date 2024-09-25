const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');
const app = express();
app.set('port', 9999);

apimock.processor.process({
  src: 'scripts/mocks', // required
  patterns: {
    // optional
    mocks: '**/*Mock.json', // optional: default is '**/*.mock.json'
    presets: '**/*Preset.json', // optional: default is '**/*.preset.json'
  },
  watches: {
    // optional
    mocks: '**/*.json', // optional: no default, set if watch files regex is different from mocks pattern
    presets: '**/*.json', // optional: no default, set if watch files regex is different from presets pattern
  },
  watch: true, // optional: default is 'false'
});

app.use(apimock.middleware);
app.use('/mocking', express.static(devInterface));

app.listen(app.get('port'), () => {
  console.log('@ng-apimock/core running on port', app.get('port'));
  console.log('@ng-apimock/dev-interface is available under /dev-interface');
});
