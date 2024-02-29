window.onload = main;
console.log("oi");
var num;
var i;
function main() {
    document.querySelector("#b").onclick = aleatorio;
    i = document.querySelector("#inser");
}

function aleatorio() {
    if (num == null) {
        num = random(100);
    }
    console.log(i.value);
    if (i.value == num) {
        document.querySelector("#res").innerHTML = "Acertou: " + num;
    } else {
        if(i.value < num){
            document.querySelector("#res").innerHTML = "Digite um número maior!"
            console.log(i.value);
        }else{
            document.querySelector("#res").innerHTML = "Digite um número menor!";
            console.log(i.value);
        }
    }
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
