//First set up a new build system.
// Go to Tools -> Build System -> New Build System --> Add the code below
/*
{
	"cmd": ["node", "$file"]
}
//Some people on Macs might need this instead. 
{
    "cmd": ["/usr/local/bin/node", "$file", "$file_base_name"],
    "working_dir": "${project_path:${folder}}",
    "selector": "*.js"
}
*/

//Node uses the same object literal

console.log("Hello World");

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

//cool();

//Function inside of a function
//This will finish in 5seconds
//setTimeout(cool(), 5000);