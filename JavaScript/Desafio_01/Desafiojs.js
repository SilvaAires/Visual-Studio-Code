window.onload = main;
var divs;
var interval;

function main() {
  console.log("teste");
  start();

  divs = document.querySelector(".quadrado1");
  divs = document.querySelector(".quadrado2");
  divs = document.querySelector(".quadrado2");
  divs = document.querySelector(".quadrado4");
  divs = document.querySelector(".quadrado5");
  divs = document.querySelector(".quadrado6");
  divs = document.querySelector(".quadrado7");
  divs = document.querySelector(".quadrado8");
  divs = document.querySelector(".quadrado9");
  divs = document.querySelector(".quadrado10");
  cores.forEach(imprimir);
  //divs.forEach(Colors);
}

function start() {
  //clearInterval(interval);
  interval = setInterval(Colors, 1000);
}

function Colors() {
  for (var i = 0; i < divs.length; i++) {
    rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    i.style.backgroundColor = rndCol;
  }
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
  console.log(item);
}
/*function changeColors() {
    divs.forEach(function (div) {
      rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
      div.style.backgroundColor = rndCol;
    });
  }
  */