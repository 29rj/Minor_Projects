var counterStart = false;
var maxCount = document.getElementsByName("counter")[0].value;
var idDiv0 = document.getElementById("counter-1");
var idDiv1 = document.getElementById("counter-2");
var buttonID = document.getElementsByName("press")[0];

console.log(maxCount," ",idDiv1," ",idDiv0," ",buttonID);

var counterId;

function startCounter() {

	maxCount=parseInt( document.getElementsByName("counter")[0].value );

	maxCount *= 1000; 

	buttonID.innerHTML = "Stop Counter";

	var count = 0;

	counterId = setInterval(function(){

		count += 1000;

		if(count >= maxCount+1){

			clearInterval(counterId);

			buttonID.innerHTML = "Start Counter";
			
			return;
		}

		var time = count/1000;

		if( time%2 == 0 ){
			idDiv1.style.display = 'none';
			idDiv0.innerHTML = time; 
			idDiv0.style.display = 'flex';
		}
		else{
			idDiv0.style.display = 'none';
			idDiv1.innerHTML = time; 
			idDiv1.style.display = 'flex';
		}
		
		console.log(count);
	},1000);
}



function stopCounter(){
	clearInterval(counterId);
	buttonID.innerHTML = "Start Counter";
	idDiv0.innerHTML = 0;
}


function myWork(){

	if(!counterStart){
		startCounter();
		counterStart=true;
	}
	else{
		stopCounter();
		counterStart=false;
	}
}

