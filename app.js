
//Importing the movie functions
//DON"T INCLUDE THE .js extension below
//You do need the path a lot of times -----> ./
//Browser can't access file system
var movies = require('./5-node-modules');
movies.avatar();



//Coming in from the other file
var shows = require('./6-node-moduleexports')
shows.printGoodShow();
console.log(shows);


require('./7-node-sharedmod-paul.js');
require('./7-node-sharedmod-joey.js');


//Notice this doesn't have the path
var fs = require('fs');

//Built into node.js for us
fs.writeFileSync("food.txt", "Food is good. I like food");
console.log(fs.readFileSync("food.txt").toString());

//Good for working with file paths
//Normalizes your slashes
var path = require('path');
var websiteHome = "Desktop/Paul//liferocks/index.html";
var websiteAbout = "Desktop/Paul/liferocks/about.html"

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));

console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

setInterval(function(){
	console.log("kayak");
}, 2000);


