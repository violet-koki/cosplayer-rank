const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cosplayer_rank',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

