//Modules - separate files in node
//Every file has this by default.
//module.exports = {};
//We're still exporting to app.js here.

module.exports = {

	favoriteShow  : "The Wire",
	
	printGoodShow : function(){
		console.log("The Wire");
	},

	printOtherGoodShow : function(){
		console.log("Silicon Valley");
	}
}