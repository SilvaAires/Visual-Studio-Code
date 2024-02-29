window.onload = main;

var lugar = 24;
var ocupado = 0;

function main() {
    document.querySelector("#txt1").innerHTML = "Assentos Vagos: " + lugar;
    document.querySelector("#txt2").innerHTML = "Assentos Ocupados: " + ocupado;
	document.querySelector(".container").addEventListener("mouseover", function(e){
		if(e.target.style.backgroundColor === "white"){
			e.target.style.backgroundColor = "black";
		}else{
			document.querySelector(".container").addEventListener("mouseout", function(e){
				e.target.style.backgroundColor = "white";
			});
		}	
	});
    document.querySelector(".container").addEventListener("click", function (e) {
        
		if (e.target.style.backgroundImage === "url('ocupado.png')") {
            e.target.style.backgroundColor = "white";
            e.target.style.backgroundImage = "url('assento.png')";
            lugar++;
            ocupado--;
            document.querySelector("#txt1").innerHTML = "Assentos Vagos: " + lugar;
            document.querySelector("#txt2").innerHTML = "Assentos Ocupados: " + ocupado;
        } else {
            e.target.style.backgroundImage = "url('ocupado.png')";
            lugar--;
            ocupado++;
            document.querySelector("#txt1").innerHTML = "Assentos Vagos: " + lugar;
            document.querySelector("#txt2").innerHTML = "Assentos Ocupados: " + ocupado;
        }
		
    });
}

function rest(e){
	e.onmouseout.style.backgroundColor = "white";
}

function mairrn() {
    var cells = document.querySelectorAll("td");

    cells.forEach(function (cell) {
        cell.addEventListener("click", function (e) {
            alert("Clicou em uma célula!");
            e.target.style.backgroundColor = "green";
        });
    });
}
