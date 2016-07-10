//REFERENCE TYPES
var paul = {
	favoriteFood : "paella",
	favoriteMovies: "The Godfather"
};

var laurissa = paul;
laurissa.favoriteFood = "pizza";
console.log(laurissa.favoriteMovies);
console.log(laurissa.favoriteFood);

//a little about scope
var dude = {
	printSomething : function(){
		console.log("Hey dude");
		console.log(this === dude);
	}
}

dude.printSomething();

function aGlobalFunction(){
	console.log("Global, bro");
	console.log(this === global);
}
aGlobalFunction();


