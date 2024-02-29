window.onload = main;

function main(){
    conta();
    bemVindo();
    info();
}

function conta(){
    for(var i = 0; i < 10; i++){
        alert(i);
    }
}

function bemVindo(){
    var nome = window.prompt("Qual o seu nome?");
    alert("Bem vindo "+nome);
}

function info(){
    var n = 'N';
    var idade = 30;
    var alt = 1.70;
    alert("Nome: "+n+"\nIdade: "+idade+"\nAltura: "+alt);
}

function op(){
    var x = 10;
    var y = 20;

    var s = x + y;
    var v = x * y;
    var m = x - y;
    var d = x / y;

    alert("Soma: "+s+"\nMultiplicação: "+v+"\nSubtração: "+m+"\nDivisão: "+d);
}