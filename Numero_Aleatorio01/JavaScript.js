window.onload = main;

var num, i;
var aux = 0;

function main() {
    document.querySelector("#b").onclick = aleatorio;
    document.querySelector("#br").onclick = rein;
    i = document.querySelector("#inser");
    console.log("Auxx: "+aux);
}

function aleatorio() {
    if ((num == null)||(aux == 0)) {
        num = random(100);
        console.log(num);
    }
    if((i.value>0) && (aux < 4)){
        if (i.value == num) {
            document.querySelector("#res").innerHTML = "Acertou: " + num;
            aux = 6;
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
        console.log("Aux: "+aux);
    }
    if(aux == 4){
        aux++;
    }
    if(aux==5){
        console.log("Game over");
        document.querySelector("#res").innerHTML = "GAME OVER";
    }
}

function rein(){
    if((aux==5)||(aux==6)){
        console.log("AQUI");
        aux = 0;
        document.getElementById("im1").src = "jpg.png";
        document.getElementById("im2").src = "jpg.png";
        document.getElementById("im3").src = "jpg.png";
        document.getElementById("im4").src = "jpg.png";
    }
}

function trocaImagem(aux){
    var im = document.getElementById("im"+aux);
    im.src = "Black.png";
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

