window.onload = main; //quando a janela tiver carregada chamar a "main"
console.log("oi..");
var btn;
// variavel so o nome direto botao = document.querySelector("button")

// criando com "var" var botao = document.querySelector("button")

// quando n vai modificar o valor const botao

//let
function main() {
  // var botao = document.querySelector("button");
  //var botao = document.querySelector("#bmudacor");
  //var botao = document.getElementById("bmudacor");
  // botao.onclick = mudaCorDeFundo;
  // botao.ondblclick = restauracor;
  // botao.onmouseover = mouseEmcima;
  // botao.onmouseout = mousesaiu;
  // botao.onclick = bemvindo;
  //var btn = document.querySelector("button");

  intervalo();
  var bt = document.querySelector("#bdpara");
  bt.onclick = paracor;
  bt.ondblclick = intervalo;
  
 // bt.onmouseout = mouseEmcima;
 // bt.onmouseover = mousesaiu;


  // var verifica = new Boolean(true);
}
function intervalo(){
  btn = setInterval(cores,500);
  document.querySelector("#bdpara").innerHTML = "Um clique para parar";
  document.querySelector("#bdpara").style.backgroundColor = "white";

}

function cores() {
  //if (verifica === 1) {
  rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.querySelector("div").style.backgroundColor = rndCol;
  document.querySelector("h1").style.backgroundColor = rndCol;
  //}
}
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function mouseEmcima() {
  document.querySelector("#bdpara").innerHTML = "Dois clique pra voltar";
  document.querySelector("#bdpara").style.backgroundColor = "pink";
}
function mousesaiu() {
  document.querySelector("#bdpara").innerHTML = "Um clique para parar";
  document.querySelector("#bdpara").style.backgroundColor = "white";
}


function paracor() {
  clearInterval(btn);
  document.querySelector("#bdpara").innerHTML = "Dois clique pra voltar";
  document.querySelector("#bdpara").style.backgroundColor = "pink";


  //verifica = false;
  //document.querySelector("div").style.backgroundColor = "blue";
  //document.querySelector("h1").style.backgroundColor = "blue";
}


/*
function mudaCorDeFundo() {
  document.body.style.backgroundColor = "green";
  //document.body.style.backgroundColor = "black"
  document.getElementById("titulo").style.backgroundColor = "white";
  //botao = document.querySelector("#bmudacor");
 // botao.onclick = restauracor;
}

function restauracor(){
    document.body.style.backgroundColor = "white";
    document.getElementById("titulo").style.backgroundColor = "aqua";
   // botao.onclick = mudaCorDeFundo;
}
function mouseEmcima(){
    document.querySelector("#bmudacor").innerHTML = "Mouse esta em cima do botão";
    document.querySelector("#bmudacor").style.backgroundColor = "pink";
}

function mousesaiu(){
 
    document.querySelector("#bmudacor").innerHTML = "BOTÂO";
    document.querySelector("#bmudacor").style.backgroundColor = "white";
}

function bemvindo(){
    var nome = window.prompt("qual seu nome?");
    alert("bem vindo "+ " "+nome);
}*/