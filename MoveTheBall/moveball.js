var ballId = document.getElementById("ball");
var prefixTop = ballId.offsetTop;
var prefixLeft = ballId.offsetLeft;

console.log(ballId.clientHeight," ",ballId.offsetLeft," ",window.innerWidth," ",window.innerHeight);

var keyPress = document.addEventListener("keydown",function(e){
	
	console.log(e.key);

	var currTop = ballId.offsetTop;
	var currLeft = ballId.offsetLeft;

	if(e.key == 'w'){
		currTop-=3;
		if(currTop >=0 ){
			ballId.style.top = currTop+"px";
		}
	}

	else if(e.key == 's'){
		currTop+=3;
		if(currTop + prefixTop <= window.innerHeight) {
			ballId.style.top = currTop+"px";
		}
	}
	else if(e.key == 'a'){
		currLeft-=3;
		if(currLeft >=0 ){
			ballId.style.left = currLeft+"px";
		}
	}
	else{
		currLeft+=3;
		if(currLeft + prefixLeft <=window.innerWidth ){
			ballId.style.left = currLeft+"px";
		}
	}

});

