window.addEventListener("DOMContentLoaded", function() {
    let btn = document.createElement("button");
    btn.innerHTML="Add Square";
    document.body.appendChild(btn);
});
var canvas=document.createElement("canvas")
    canvas.style.width="100%";
    canvas.style.height="100%";
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvas.style.position="absolute";
    canvas.style.left=10;
    canvas.style.top=10;
    canvas.style.zindex=100000;
    canvas.style.pointerEvents="none";
    document.body.appendChild(canvas);
    var context=canvas.getContext("2d");
    let counter=1;
    btn.addEventListener("click", function() {
        context.rect(20,20,50,60);
        context.fillstyle="black";
        context.fill(); 
        document.body.appendChild()           
    
btn=document.getElementById("btn");
btn.addEventListener("click", function() {
let container=document.createElement("div");
container.className="div";
document.body.appendChild(container);
 let btn=document.querySelector("button");
let container=document.querySelector("div");


});





