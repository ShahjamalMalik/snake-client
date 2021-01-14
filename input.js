let connection;
const { up, down, left, right, specialMessageObj } = require('./constants');



let currentInterval;
const handleUserInput = function(inputOfUser) {
  const interval = function(keyPressed) {
    currentInterval = setInterval(() => {
      connection.write(keyPressed);
    }, 100);
  };

  if(inputOfUser === '\u0003') {
    process.exit();
  } else if (inputOfUser === 'w') {
    clearInterval(currentInterval);
    interval(up);
  } else if (inputOfUser === 'a') {
    clearInterval(currentInterval);
    interval(left);
  } else if (inputOfUser === 's') {
    clearInterval(currentInterval);
    interval(down);
  } else if (inputOfUser === 'd') {
    clearInterval(currentInterval);
    interval(right);
  } else if (inputOfUser === 'q') {
    clearInterval(currentInterval);
    connection.write(specialMessageObj.specialMessage1);
  } else if (inputOfUser === 'e') {
    clearInterval(currentInterval);
    connection.write(specialMessageObj.specialMessage2);
  } else if (inputOfUser === 'r') {
    clearInterval(currentInterval);
    connection.write(specialMessageObj.specialMessage3);
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput };