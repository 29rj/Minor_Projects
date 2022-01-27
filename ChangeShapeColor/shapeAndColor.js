var onedivId=document.getElementById("one-div");
var changeColorId=document.getElementById("changeColor");
var changeShapeId=document.getElementById("changeShape");
var subdiv=document.getElementById("one-sub-div");

var colorList=["red","grey","blue","black","green","yellow"];

var globalColor,sizeLeft=50,sizeRight=50,sizeTop=0,sizeBottom=100;

function colorChange() {

	var rand=Math.floor(Math.random()*colorList.length);

	// console.log(rand," ",colorList[rand]);

	onedivId.style.backgroundColor = colorList[rand];

	globalColor=colorList[rand];

	if(sizeTop==100)
	{
		subdiv.style.borderTopColor = 'white';
		subdiv.style.borderRightColor = globalColor;
		subdiv.style.borderLeftColor = globalColor;
		subdiv.style.borderBottomColor = globalColor;
	}
	else if(sizeLeft==100)
	{
		subdiv.style.borderTopColor = globalColor;
		subdiv.style.borderRightColor = globalColor;
		subdiv.style.borderLeftColor = 'white';
		subdiv.style.borderBottomColor = globalColor;
	}
	else if(sizeRight==100)
	{
		subdiv.style.borderTopColor = globalColor;
		subdiv.style.borderRightColor = 'white';
		subdiv.style.borderLeftColor = globalColor;
		subdiv.style.borderBottomColor = globalColor;
	}
	else
	{
		subdiv.style.borderTopColor = globalColor;
		subdiv.style.borderRightColor = globalColor;
		subdiv.style.borderLeftColor = globalColor;
		subdiv.style.borderBottomColor = 'white';
	}
}


function fun1() {
	subdiv.style.borderLeft ='50px solid '+globalColor;
	subdiv.style.borderRight ='50px solid '+globalColor;
	subdiv.style.borderTop ='100px solid transparent';
	subdiv.style.borderBottom ='0px solid white';
	sizeLeft=50;
	sizeRight=50;
	sizeTop=100;
	sizeBottom=0;
}

function fun2() { 
	subdiv.style.borderLeft ='50px solid '+globalColor;
	subdiv.style.borderRight ='50px solid '+globalColor;
	subdiv.style.borderTop ='0px solid transparent';
	subdiv.style.borderBottom ='100px solid white';
	sizeLeft=50;
	sizeRight=50;
	sizeTop=0;
	sizeBottom=100;
}


function fun3() { 
	subdiv.style.borderLeft ='0px solid transparent';
	subdiv.style.borderRight ='100px solid white';
	subdiv.style.borderTop ='50px solid '+globalColor;
	subdiv.style.borderBottom ='50px solid '+globalColor;
	sizeLeft=0;
	sizeRight=100;
	sizeTop=50;
	sizeBottom=50;
}


function fun4() { 
	subdiv.style.borderLeft ='100px solid white';
	subdiv.style.borderRight ='0px solid transparent';
	subdiv.style.borderTop ='50px solid '+globalColor;
	subdiv.style.borderBottom ='50px solid '+globalColor;
	sizeLeft=100;
	sizeRight=0;
	sizeTop=50;
	sizeBottom=50;
}

function shapeChange() { 

	var num=Math.floor(4*Math.random());

	console.log(num);

	if(num==0){
		fun1();
	}
	else if(num==1){
		fun2();
	}
	else if(num==2){
		fun3();
	}
	else{
		fun4();
	}
}



changeColorId.addEventListener("click",colorChange);
changeShapeId.addEventListener("click",shapeChange);
