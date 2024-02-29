window.onload = main;

function main(){
    document.querySelector("#Lampada").onmouseover = ascender;
    document.querySelector("#Lampada").onclick = quebar;
    document.querySelector("#Lampada").onmouseout = apagar;
}

function ascender(){
    trocarImagem('lamp_on');
    
}

function quebar(){
    trocarImagem('quebrada');
}

function apagar(){
    trocarImagem('lamp_off');
}

function trocarImagem(imagem){
    document.getElementById("#Lampada").src = "imagens/"+imagem;
}