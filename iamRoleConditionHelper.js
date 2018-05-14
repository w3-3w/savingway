'use strict';

const fs = require('fs');

// Serverless does't support variable parsing on keys.
// This is why this script is needed.
// https://github.com/serverless/serverless/issues/2892
module.exports = () => {
  const config = JSON.parse(fs.readFileSync('./config.json'));
  const conditionKey = `ec2:ResourceTag/${config.instance.tag.key}`;
  const conditionBody = {};
  conditionBody[conditionKey] = false;
  return conditionBody;
};