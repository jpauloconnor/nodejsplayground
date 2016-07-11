
//Getting started on cmd 
//node -> type in some code

// Play around with thtandard Libraries

/*
	Async - callback function - when a file finished reading.
	Low level - good building blocks for higher level abstractions
	HTTP is first class

*/


//Node is built on JS, and it uses JS. 

console.log("Hello World");


//1 Hello world
//Node is built on JS, and it uses JS. 
console.log("Hello World");
//Go to the cmd line, enter 1.basics.js. You should get back a "Hello World"

//2 Input on the cmd line

//Here 0 spot is node cmd, 1 is file 2 is var
var name = process.argv[2];
console.log("Hello " + name);
//CMD - 1.bascis.js paul


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
	response.write("Hello World!"); //send the text or info
	response.end(); //
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running");



//Node uses the same object literal notation as JS

var potatoChips = {
	brand 	: "Doritos",
	price 	: 2.99,
	maker 	: "Fritos"
};

console.log(potatoChips);

function add(a,b){
	return a + b;
}

console.log(add(4,5));

//You are cool
var cool = function(){
	console.log("You are cool");
}

cool();

//Function inside of a function
//This will finish in 5seconds

//setTimeout
//This is cool...
setTimeout(cool(), 5000);


//http://stackoverflow.com/questions/5849106/how-does-settimeout-work-in-node-js
setTimeout(function () {
  console.log('Wowie zowie!')
	}, 100)
var end = Date.now() + 5000
while (Date.now() < end) ;
console.log('Event loop. Which will come first?')
