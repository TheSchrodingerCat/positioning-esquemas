
//primera caja

//caja grande
var bigBoxUno = document.createElement("div");
bigBoxUno.setAttribute("id","big-uno");

var primerSection = document.getElementById("cajitas-uno");
primerSection.appendChild(bigBoxUno);

//caja mediana
var mediumBoxUno = document.createElement("div");
mediumBoxUno.setAttribute("id","medium-uno");

bigBoxUno.appendChild(mediumBoxUno);

//caja pequeña
var smallBoxUno = document.createElement("div");
smallBoxUno.setAttribute("id","small-uno");

mediumBoxUno.appendChild(smallBoxUno);


//segunda caja

//caja grande
var bigBoxDos = document.createElement("div");
bigBoxDos.setAttribute("id","big-dos");

var segundoSection = document.getElementById("cajitas-dos");
segundoSection.appendChild(bigBoxDos);

//caja mediana
var mediumBoxDos = document.createElement("div");
mediumBoxDos.setAttribute("id","medium-dos");

bigBoxDos.appendChild(mediumBoxDos);

//caja pequeña
var smallBoxDos = document.createElement("div");
smallBoxDos.setAttribute("id","small-dos");

bigBoxDos.appendChild("smallBoxDos");

