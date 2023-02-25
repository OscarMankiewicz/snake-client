let connection;
let { inputKeys } = require('./constants')

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function (data) {
    // your code here
    if(data === '\u0003') {
        process.exit();
    } else if (data === inputKeys.MOVE_UP_KEY) {
        connection.write('Move: up')
    } else if (data === inputKeys.MOVE_LEFT_KEY) {
        connection.write('Move: left')
    } else if (data === inputKeys.MOVE_DOWN_KEY) {
        connection.write('Move: down')
    } else if (data === inputKeys.MOVE_RIGHT_KEY) {
        connection.write('Move: right')
    } else if (data === inputKeys.SAY_WOW_KEY) {
        connection.write('Say: Wow')
    } else if (data === inputKeys.SAY_GG_KEY) {
        connection.write('Say: GG') 
    } else if (data === inputKeys.SAY_HAHA_KEY) {
        connection.write('Say: HaHa') 
    } else if (data === inputKeys.SAY_LETS_PLAY_AGAIN_KEY) {
        connection.write("Say: Let's play again") 
    } else if (data === inputKeys.SAY_SURE_KEY) {
        connection.write("Say: Sure") 
    } else if (data === inputKeys.SAY_NO_THANKS_KEY) {
        connection.write("Say: No thanks") 
    }
};

module.exports = {setupInput};