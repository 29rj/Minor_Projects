var innerSubId=document.getElementById("sub-inner1");
var innerId=document.getElementById("inner-1");

console.log('innerId');

var count=0;

function changeToDark() {
	document.body.style.backgroundColor="black";
	document.body.style.color="white";
	innerId.style.justifyContent = "right";
}


function changeToLight() {
	document.body.style.backgroundColor="white";
	document.body.style.color="black";
	innerId.style.justifyContent = "left";
}

function change() {

	if(count==0) {
		changeToDark();
		count=1;
	}
	else {
		changeToLight();
		count=0;
	}
}


innerSubId.addEventListener("click",change);
