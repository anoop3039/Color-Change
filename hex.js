const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



var button = document.getElementById("btn")
var back = document.querySelector("body")
var color = document.querySelector(".color")


button.addEventListener("click", function colorChange(){
    var ourColor ='#';

    for(var i =0; i<6; i++) {
        ourColor = ourColor + hex[getRandomNumber()];
    }
    back.style.backgroundColor = ourColor;
    color.textContent = ourColor;
}
)

function getRandomNumber(){
return Math.floor(Math.random()* 15) ;
}
