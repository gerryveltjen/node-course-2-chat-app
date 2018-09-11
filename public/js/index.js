const socket = io();

socket.on('connect', function () {
    console.log('connected to server');
    socket.emit('createMessage', {
        from: 'gerry',
        text: 'Hey are you ok?'
    });
});

socket.on('disconnect', function () {
    console.log('disconnected to server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});