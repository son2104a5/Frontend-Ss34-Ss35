let btn = document.getElementById("btn");
let li = document.createElement("li");
let ul = document.getElementById("ul");
btn.onclick = function(){
    li.innerText = document.getElementById("add").value;
    ul.appendChild(li);
    document.getElementById("add").value = "";
}