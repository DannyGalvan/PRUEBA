var boton = document.getElementById("button");
boton.addEventListener("click",datos);

function datos() 
{
    var nombre = prompt("cual es tu nombre");
    parrafo.innerHTML += "usuario " + nombre + "</br>";
    parrafo.innerHTML += "el usuario que esta entrando es: " + nombre + "</br>";

    var respuesta = prompt("puedo saber donde vives? " + nombre);
    parrafo.innerHTML += "consola: puedo saber donde vives?" + "</br>";
    parrafo.innerHTML += nombre + " : " + respuesta + "</br>";

    var edad = prompt("quiero saber tu edad " + nombre + " me la podrias dar");
    parrafo.innerHTML += "consola: quiero saber tu edad " + nombre + "</br>";
    parrafo.innerHTML += "esta es tu edad " + nombre + " : " + edad + "</br>";
    alert("gracias por participar");  
    alert("solo es una prueba");
}









