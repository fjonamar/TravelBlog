console.log("h")
var p1 = document.getElementById("center");
var p2 = document.getElementById("right"); 
var p3= document.getElementById("left");



window.addEventListener("scroll", function () { 
    let value = window.scrollY;
console.log(value)
p1.style.opacity = 0.6+ value / 7000 ;

p2.style.left =  value * 0.25 + "px";

p2.style.top= value * 0.25 + "px";

p3.style.right= value * 0.25 + "px";

p3.style.top = value * 0.25 + "px";


});