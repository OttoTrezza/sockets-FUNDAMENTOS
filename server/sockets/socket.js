 // IO = esta es la comunicacion con el backend
 const { io } = require('../server'); //importo io de SERVER.JS

 // Cuando el cliente se conecta
 io.on('connection', (client) => {

     console.log('Usuario conectado');

     // Enviar mensaje al cliente
     client.emit('enviarMensaje', 'Hola cliente');

     // Cuando recibo mensaje del cliente
     client.on('enviarMensaje', (data, callback) => {
         console.log(data);

         client.broadcast.emit('enviarMensaje', data);





         //  if (mensaje.usuario) {
         //      callback({
         //          resp: 'TODO SALIO BIEN!'
         //      });
         //  } else {
         //      callback({
         //          resp: 'TODO SALIO MAL!!!'
         //     });
         //  }
         // callback(); // envio la confirmacion al cliente de que recibi su mensaje
     });

     // Cuando se desconecta el cliente
     client.on('disconnect', () => {
         console.log('Usuario desconectado');
     });
 });