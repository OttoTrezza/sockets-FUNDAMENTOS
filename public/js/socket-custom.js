// * YO SOY EL CLIENTE* // -->

var socket = io();

// Cuando yo(cliente) me conecto al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// cuando yo(cliente) me desconecto del servidor
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// Enviar informacion    .emit
socket.emit('enviarMensaje', {
    usuario: ' ',
    mensaje: 'Hola Servidor'
}, function(resp) { // Recibo la confirmacion de que el mensaje fue recibido en el servidor
    console.log('respuesta server: ', resp);

});

// Recibir Informacion    .on
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});