const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var button = document.getElementById("btn");
var back = document.querySelector("body");
var color = document.querySelector(".color");


button.addEventListener("click", function colorChange(){

    var x = getRandomNumber();

    back.style.backgroundColor = colors[x];
    color.textContent = colors[x];
        
}
)

function getRandomNumber(){
return Math.floor(Math.random()* 4) ;
}