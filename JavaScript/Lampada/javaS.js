
window.onload = init;

function init() {
    var b =document.querySelector("#b1");
    //var b =document.getElementById("b1");
    b.onclick = mudacor;

    document.querySelector("#b1").addEventListener('click',alertar);
    document.querySelector("#b1").addEventListener('click',mudacor);
    document.querySelector("#b1").addEventListener('mouseover',function(e){
        alert("saiu");
        e.target.style.backgroundColor = "green";
    })
}

var b = true;

function mudacor(){
    //if(b==true){
        document.body.style.backgroundColor = "orange";
       // b = false;
    //}else{
       // document.body.style.backgroundColor = "blue";
       document.querySelector("#b1");
       // b = true;
    //}
    b.onclick = restcor;
}

function restcor(){
    document.body.style.backgroundColor = "white";
   document.querySelector("#b1").onclick = mudacor;
}

function mudacorePar(back, txt){
    document.body.style.backgroundColor = back;
    document.body.style.color = txt;
}



function mcor(){
    var back = window.prompt();
    var txt = window.prompt();
    mudacorePar(back, txt);
}