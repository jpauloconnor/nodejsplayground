
function printAvatar(){
	console.log("Avatar: PG-13");
}

function printTheGodfather(){
	console.log("The Godfather: R");
}

//Use this to export code to another module -> app.js.
module.exports.avatar = printAvatar;
module.exports.godfather = printTheGodfather;

//More efficient way to do thsi