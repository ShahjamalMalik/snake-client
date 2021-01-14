let connection;

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
    interval("Move: up");
  } else if (inputOfUser === 'a') {
    clearInterval(currentInterval);
    interval("Move: left");
  } else if (inputOfUser === 's') {
    clearInterval(currentInterval);
    interval("Move: down");
  } else if (inputOfUser === 'd') {
    clearInterval(currentInterval);
    interval("Move: right");
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