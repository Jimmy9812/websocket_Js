const WebSocket = require('ws');

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado.');

  // Enviar mensaje al cliente al conectarse
  ws.send('¡Hola desde el servidor WebSocket!');

  // Manejar mensajes recibidos del cliente
  ws.on('message', (message) => {
    console.log(`Mensaje recibido del cliente: ${message}`);
  });

  // Manejar cierre de conexión
  ws.on('close', () => {
    console.log('Cliente desconectado.');
  });
});

console.log('Servidor WebSocket ejecutándose en ws://localhost:8080');
