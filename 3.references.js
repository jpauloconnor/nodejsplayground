//VALUE TYPES

var a = 1;
var b = a;
b = 2;
console.log("b value:", b); //=> 2
console.log("a value:", a); //=> 1




//REFERENCE TYPES
//OBJECT, Arrya, function

var a = { x: 1, y: 7 }; //They reference differnt objects
var b = { x: 1, y: 7 };

if(a == b); //=> false
if(a === b); //=> false - different objects

b = a; // a & b now reference the same object
if(a == b );
if(a === b );

function foo(bar) {
	bar.x = 2;
}

var a = { x: 1, y: 7 };
foo(a);
console.log("a: ", a); //=>2
console.log("a.x: ", a.x); //=>2



//if you dereference an object, you can't alter it anymore
function fooboo(bar){
	bar = { x: 2, y: 9};
}

var a = { x: 1, y: 7};
fooboo(a);
console.log("a.x in fooboo:", a.x, a.y);


//A copy of a reference type
//Won't do a deep copy - no nested stuff
var array1 = [0,1,2];
var array2 = array1.slice(0);  //=> makes a copy starting at 0 spot
console.log(array1, array2);

array1[3] = 3;
console.log(array1, array2); //=> two different types

//jquery has something for object copies
//deep copy
var myObject = $.extend({}, oldObject);
var myObject = $.extend(true, {}, oldObject);







var paul = {
	favoriteFood : "paella",
	favoriteMovies: "The Godfather"
};

var laurissa = paul;
laurissa.favoriteFood = "pizza";
console.log(laurissa.favoriteMovies);
console.log(laurissa.favoriteFood);
console.log(laurissa);
console.log(paul);


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


