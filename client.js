const net = require('net');
const { port, host, encoding } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: host,
    port: port
  });

  conn.setEncoding(encoding);

  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };