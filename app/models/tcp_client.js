var xy = new Boolean(false); // x si 0 | y si 1

var address = '192.168.43.108';
var port = 5000;
var net = require('net');

var client = new net.Socket();

client.bytesRead = 2;

client.connect(port, address, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {

	console.log('data = ', data.toString());

	if (data == "\n") {
		xy = !xy;
		socket.pause()
	}

	if (xy == false) {
		console.log('x = ' + data);
		xy = true;
	} else if (xy == true) {
		console.log('y = ' + data);
		xy = false;
	} else {
		console.log("ERROR");
	}
	
	if (data == "END") {
		client.destroy();
	}
});

client.on('close', function() {
	console.log('Connection closed');
});
