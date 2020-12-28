

let values = [];
let i = 0;
let j = 0;
let Play = 0;
let Reset = 1;
let AlgoName = ""


function setup() {
	createCanvas(720, 400);
  	initialize()
}



function draw() {
	fr = int(document.getElementById("framerate").value);

	background(220);
	frameRate(fr);

	if (Reset == 1){
		initialize();
		Reset = 0;
		Play = 0;
	}
	if(Play == 1){
		
		if (AlgoName == "Bubble_Sort"){
			bubbleSort();
		}
		else if(AlgoName == "Merge_Sort"){
			alert("Work in Progress !!");
			Play = 0;
		}
		else if(AlgoName == "Quick_Sort"){
			quickSort();
		}
		else if(AlgoName == "Insertion_Sort"){
			alert("Work in Progress !!");
			Play = 0;
		}
		else if(AlgoName == "Selection_Sort"){
			alert("Work in Progress !!");
			Play = 0;
		}
		else if(AlgoName == "Heap_Sort"){
			alert("Work in Progress !!");
			Play = 0;
		}
		else{
			alert("Please select algorithm !!");
			Play = 0;
		}
	}
	simulateSorting();
}

function SetPlay(i){
	Play = i
}
function SetReset(i) {
	Reset = i
}

function initialize(){
	i = 0;
	j = 0;
	SetPlay(0);
	values = [];
	QuickSortList=[[]]
	for(let i = 0;i<width/8;i++){
		values.push(random(height));
		QuickSortList[0].push(random(height));
	}
}


function simulateSorting(){
  for(let i = 0;i<values.length;i++){
	stroke(100, 143, 143);
	fill(50);
	rect(i*8 , height, 8, -values[i],20);
   }
}


function SetAlgorithm(algoName) {
	AlgoName = algoName
	initialize();
}