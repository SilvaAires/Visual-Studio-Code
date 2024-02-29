window.onload = main;

var num, i;
var aux = 0;
var ver = false;

function main() {
    document.querySelector("#b").onclick = aleatorio;
    i = document.querySelector("#inser");
}

function aleatorio() {
    if (num == null) {
        num = random(100);
    }
    console.log(num);
    if(aux == 4){
        aux++;
    }
    if((i.value>0) && (aux < 4)){
        if (i.value == num) {
            ver = true;
            console.log(ver);
            document.querySelector("#res").innerHTML = "Acertou: " + num;
            
        } else {
            if(i.value < num){
                document.querySelector("#res").innerHTML = "Digite um número maior!"
                console.log(i.value);
                aux++;
                trocaImagem(aux);
            }else{
                document.querySelector("#res").innerHTML = "Digite um número menor!";
                console.log(i.value);
                aux++;
                trocaImagem(aux);
            }
        }
    }
    console.log(ver);
    final;
}

function final(){
    if((aux == 5) && (ver == false)){
        document.querySelector("#res").innerHTML = "GAME OVER";
    }
}

function trocaImagem(aux){
    var im = document.getElementById("im"+aux);
    im.src = "Black.png";
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
