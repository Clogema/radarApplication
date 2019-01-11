var xyp =0; // x si 0 | y si 1

var address = '192.168.43.108';
//var address = '127.0.0.1';
var port = 3000;

/*var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(port, address);*/


var net = require('net');

var client = new net.Socket();

//client.bytesRead = 2;

client.connect(port, address, function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {

	var dataS = data.toString();

	//console.log('data = ', dataS);
	dataSplit = dataS.split('\n');
	//console.log('split = ', dataSplit);

	for(i = 0; i < dataSplit.length; i++) {
		if (xyp == 0) {
			console.log('x = ' + dataSplit[i]);
			xyp = 1;
		} else if (xyp == 1) {
			console.log('y = ' +  dataSplit[i]);
			xyp = 2;
		} else if (xyp == 2) {
			console.log('peak = ' +  dataSplit[i] + '\n');
			xyp = 0;
		} else {
			console.log("ERROR");
		}		
	}

	if (data == "END") {
		client.destroy();
	}
});

client.on('close', function() {
	console.log('Connection closed');
});