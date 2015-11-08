var nombre = prompt("¿Como te llamas?");
while(nombre == null ){
	nombre = prompt("¿Como te llamas?");
	}

var escuela = prompt("¿En que escuela estas?");
while(escuela == null ){
	escuela = prompt("¿Como te llamas?");
	}

var semestre = prompt("¿En que semestre estas?");

while(escuela == null ){
	escuela = prompt("¿Como te llamas?");
	}
alert("Bienvenido " + nombre + " espero que te la estes pasando bien en " + escuela + " .");

document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
document.getElementById("escuela").innerHTML = "Escuela: " + escuela;
document.getElementById("semestre").innerHTML = "Semestre: " + semestre;

$( "#target" ).click(function() {
  document.URL("index2.html");
});
