
var ws = new WebSocket('ws://192.168.0.102:1234/PIR');
//var ws = new WebSocket('ws://localhost:3500');//Si sur localhost
 ws.onopen = function () {
     console.log('socket connection opened properly');
     //ws.send("Hello World"); // send a message
     console.log('message sent');
 };

 ws.onmessage = function (evt) {
     console.log("Message received = " + evt.data);
 };

 ws.onclose = function () {
     // websocket is closed.
     console.log("Connection closed...");
 };
 
//ws.send(msg); //Envoi d'un message