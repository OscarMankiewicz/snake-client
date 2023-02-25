const net = require("net");
const { IP, PORT } = require("./constants");

//establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: IP,// IP address imported from constants.js
      port: PORT// PORT number imported from constants.js
    });
  
    //interpret incoming data as text
    conn.setEncoding("utf8");
    //send a message to server after a successfull connection
    conn.on("connect", () => {
      console.log('Successfully connected to game server')
    });

    //write the Username about the snake
    conn.on("connect", () => {
        conn.write("Name: OSC")
    })

    conn.on('data', (data) => {
      console.log(data.toString());
    });

    return conn;
  };
  
  //export connect to be used in play.js
  module.exports = {connect};