const port = 50541;
const host = 'localhost';
const encoding = 'utf8';
const up = "Move: up";
const down = "Move: down";
const left = "Move: left";
const right = "Move: right";
/*const specialMessage3 = "Say: i am best snekkkk";
const specialMessage1 = "Say: turning into snekkk";
const specialMessage2 = "Say: i am now a snekkk";*/
const specialMessageObj = {
  specialMessage1: "Say: turning into snekkk",
  specialMessage2: "Say: i am now a snekkk",
  specialMessage3: "Say: i am best snekkkk"
};



module.exports = {
  port,
  host,
  encoding,
  up,
  down,
  left,
  right,
  specialMessageObj
};