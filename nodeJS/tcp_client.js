// rasberry : 192.168.43.108:5000

var net = require('net');

var client = new net.Socket();
client.connect(3000, '192.168.43.108', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	
	if (data == "END") {
		client.destroy();
	}
});

client.on('close', function() {
	console.log('Connection closed');
});
