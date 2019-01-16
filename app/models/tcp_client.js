var xyp =0; // x si 0 | y si 1

var address = '192.168.0.107';
//var address = '127.0.0.1';
//var address = '172.20.10.5';
var port_radar = 3000;
var port_PIR = 3500;
/*var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(port, address);*/


var net = require('net');

var client_radar = new net.Socket();
var client_PIR = new net.Socket();

//client.bytesRead = 2;

// Connexion RADAR :
client_radar.connect(port_radar, address, function() {
	console.log('Connected');
	client_radar.write('Hello, server! Love, Client.');
});


// Connexion PIR :
client_PIR.connect(port_PIR, address, function() {
	console.log('Connected');
	client_PIR.write('Hello, server! Love, Client.');
});




// Réception données RADAR :
client_radar.on('data', function(data) {

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
			console.log('peak = ' +  dataSplit[i]);
			xyp = 3;
		} else if (xyp == 3) {
			console.log('rangeID = ' +  dataSplit[i]);
			xyp = 4;
		} else if (xyp == 4) {
			console.log('Doppler = ' +  dataSplit[i] + '\n');
			xyp = 0;

		} else {
			console.log("ERROR");
		}		
	}

	if (data == "END") {
		client_radar.destroy();
		client_PIR.destroy(); //On arrête le PIR lorsque le radar a fini.
	}
});

client_radar.on('close', function() {
	console.log('Connection closed');
});

// Réception données PIR :
client_PIR.on('data', function(data) {

	var dataS = data.toString();
	//console.log('PIR = ', dataS);

	dataSplit = dataS.split('\n');


	for(i = 0; i < dataSplit.length; i++) {
		
		console.log('PIR = ', dataSplit[i]);
	}
});

client_PIR.on('close', function() {
	console.log('Connection closed');
});