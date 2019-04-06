// <!-- // * YO SOY EL SERVIDOR* // -->

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const publicPath = path.resolve(__dirname, '../public');

const app = express();

let server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// IO = esta es la comunicacion con el backend
module.exports.io = socketIO(server); //EXPORTO IO
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});