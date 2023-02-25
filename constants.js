//IP is equal to localhost because the server is opened in another terminal
const IP = 'localhost';
const PORT = 50541;


//this object handles user inputs
const inputKeys = {
    MOVE_UP_KEY: 'w',
    MOVE_LEFT_KEY: 'a',
    MOVE_DOWN_KEY: 's',
    MOVE_RIGHT_KEY: 'd',
    SAY_WOW_KEY: '1',
    SAY_GG_KEY: '2',
    SAY_HAHA_KEY: '3',
    SAY_LETS_PLAY_AGAIN_KEY: '4',
    SAY_SURE_KEY: '5',
    SAY_NO_THANKS_KEY: '6',
};

//export the consts to other files
module.exports = {
    inputKeys,
    IP,
    PORT,
};