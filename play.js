//import functions from other files
const {connect} = require('./client')
const {setupInput} = require('./input')


console.log("Connecting ...");

//conn uses the connect function imported from ./client
const conn = connect();
//setupInput calls back to conn
setupInput(conn);