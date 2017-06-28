var app = angular.module("projectApp", []);

/*document.getElementById('switchBut').onclick = function(){
	//document.getElementById('projContent').setAttribute('proj', 'b45s');
	document.getElementById('test').innerHTML = "I HAVE BEEN SWITCHED";
}*/

var modal = document.getElementById('projModal');
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];
var captionText = document.getElementById("caption");
span.onclick = function() {
  modal.style.display = "none";
}