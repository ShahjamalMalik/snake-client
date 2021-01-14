const { setupInput } = require('./input.js')
const { connect } = require('./client.js');
let returnObject = connect();

console.log('Connecting ...');


setupInput(returnObject);