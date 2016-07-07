//Server with chef analogy

//Server and chef and multiple requests
//Only one server
//Need to find a faster way to get customer order.
//Server walks over and tells chef
//He cooks egg.
//Server stays there while he cooks.
//Why doesn't the server take order. Tell chef to cook. Instead of standing, take another order.
//Server doesn't take one order at a time.
//Three orders, three eggs at a time.

function placeAnOrder(orderNumber){
	console.log("Customer order" + orderNumber);
	cookAndDeliverFood(function(){
		console.log("Delivered food order " + orderNumber);
	});
}--


//Hey chef, call me back when the eggs are ready.
//A bit of code that will run when the time runs out
function cookAndDeliverFood(callback){
	//setting a schedule
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
