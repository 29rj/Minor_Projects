var boxId = document.getElementById("box");
console.log(boxId.getBoundingClientRect());

var maxWidth = window.innerWidth-50;
var maxHeight = window.innerHeight-50;

// console.log("wow");

var change = boxId.addEventListener("mouseenter",function(){
	
	var x = Math.floor(Math.random() * maxWidth);
	var y= Math.floor(Math.random() * maxHeight);

	boxId.style.top = y + "px";
	boxId.style.left = x + "px";
	console.log(x," ",y,"\n");
});