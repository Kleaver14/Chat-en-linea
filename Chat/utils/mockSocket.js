// Simulación de Socket.io
const mockSocket = {
    emit: (event, data) => {
        console.log(`Enviando evento: ${event}`, data);
        setTimeout(() => {
            if (event === 'sendMessage') {
                mockSocket.onMessage(data);
            }
        }, 200);
    },
    on: (event, callback) => {
        mockSocket._callbacks = mockSocket._callbacks || {};
        mockSocket._callbacks[event] = callback;
    },
    onMessage: (message) => {
        if (mockSocket._callbacks && mockSocket._callbacks.newMessage) {
            mockSocket._callbacks.newMessage(message);
        }
    }
};