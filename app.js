
//Importing the movie functions
//DON"T INCLUDE THE .js extension below
//Browser can't access file system
var movies = require('./5-node-modules');
movies.avatar();

//Coming in from the other file
var shows = require('./6-node-moduleexports')
shows.printGoodShow();
console.log(shows);
