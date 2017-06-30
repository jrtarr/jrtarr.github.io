var app = angular.module("projectApp", []);

//Modal Image stuff//
var modal = document.getElementById('projModal');
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];
var captionText = document.getElementById("caption");

span.onclick = function() {
  modal.style.display = "none";
}
