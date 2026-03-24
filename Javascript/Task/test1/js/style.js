var boxElement = document.getElementById('boxcolor').classList
var colorText = document.getElementById('colorname')
/*function addcolor(){
	alert("hi");
}*/
function addcolor(color, colorName){
	boxElement.remove('pink','yellow','Green','Red','Purple','Brown','grey','light-pink','Pumpkin','Cornflower','Blue','flag-red')
	boxElement.add(color);
	colorText.innerText = colorName
}
 
