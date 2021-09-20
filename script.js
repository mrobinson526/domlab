window.addEventListener("DOMContentLoaded", function() {
    let count=1;
    let btn = document.createElement("button");
    btn.innerHTML="Add Square";
    document.body.appendChild(btn);
    });
    
    var btn=document.querySelector("button");
    var container=document.querySelector("#count");
    btn.addEventListener("click", function() {
        var square=document.createElement("div")
            square.className="box"
            square.style.width="20px";
            square.style.height="20px";
            square.style.backgroundColor="black";
        container.appendChild(square)
    })