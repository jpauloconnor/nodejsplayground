//Prototyping
function user(){
	this.name = "";
	this.life = 100;

	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life+= 1;
		console.log(this.name + " gavae one life to " + targetPlayer.name);

	}
}

function enemy(name, age, rank){
	this.name = name;
	this.age = age;
	this.rank = rank;
}

var enemyGuy = new enemy("John", 25, 1);
console.log(enemyGuy);

var paulie = new user();
var joey = new user();

paulie.name = "Paul";
joey.name = "Joey";

paulie.giveLife(joey);
console.log("Paul", paulie.life);
console.log("Joey", joey.life);

//add functions
user.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -=3;
	console.log(this.name + " gave an uppercut to " + targetPlayer.name);
}

joey.uppercut(paulie);
console.log("Paul", paulie.life);
//add properties
user.prototype.magic = 60;

console.log(paulie.magic);


//Why add prototyping? 


