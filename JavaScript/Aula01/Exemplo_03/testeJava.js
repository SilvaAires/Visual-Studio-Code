window.onload = main;

function main(){
    var bot = document.getElementById("bt");
    bot.onclick = mudaCC;

    var tt = document.getElementById("ajuda");
    tt.onmouseover = mudaTT;
}

function mudaCC(){
    document.body.style.backgroundColor = "black";
}

function mudaTT(){
    var t = document.querySelector("#ajuda");
    t.innerHTML = "Texto da Ajuda!";
}
