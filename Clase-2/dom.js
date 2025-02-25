// conectar
// crear / manipular
// mostrar

//Conecatando
var texto1 = document.getElementById("div1");
var texto2 = document.getElementsByClassName("div2")[0];
var texto3 = document.getElementsByTagName("p")[0]

//Crear / Manipular
//Cambiar texto
texto1.textContent = "Pato"
texto2.innerHTML = "<p>patito</p>";
texto3.innerText = "PATOTE";

//Cambiar atributos
texto1.setAttribute("class", "patito titere");
texto2.setAttribute("title", "Soy un Titere");
texto2.setAttribute("class", "titere");