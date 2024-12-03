// Conectar al servidor WebSocket
const socket = new WebSocket('ws://localhost:8080');

// Cuando la conexión esté abierta
socket.onopen = () => {
  console.log('Conectado al servidor WebSocket.');
  socket.send('¡Hola desde el cliente!');
};

// Escuchar mensajes del servidor
socket.onmessage = (event) => {
  console.log('Mensaje del servidor:', event.data);

  // Mostrar el mensaje en la página
  const messagesDiv = document.getElementById('messages');
  messagesDiv.innerHTML += `<p>${event.data}</p>`;
};

// Manejar errores
socket.onerror = (error) => {
  console.error('Error en WebSocket:', error);
};

// Manejar cierre de la conexión
socket.onclose = () => {
  console.log('Conexión cerrada.');
};
