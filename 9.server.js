//This is code that will be on a server.
//When you create a web site, people are going to try to connect to 
//that server, and the server
//is responsible for looking at the request and sending some files. 


//Incredibly easy to

//Built in variable to create a server
//This is now listening for traffic.

//request = info about users request what web page? what info?
//response = object that we can send back to them
//Whenever user tries to connect, then the user tries to find a favicon.

var http = require('http');


function onRequest(request, response){
	console.log("Our user made a request" + request.URL); //log something out
	response.writeHead(200, {"Context-Type": "text/plain"}); //set up response and send text
	response.write("Here is your crazy data, bro."); //send the text or info
	response.end(); //
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running");


