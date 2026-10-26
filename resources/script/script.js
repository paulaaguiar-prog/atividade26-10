// console.log(document.getElementById("Paragrafo"));
// console.log(document.getElementsByClassName("texto"));
// console.log(document.getElementsByTagName("p"));

// console.log(document.querySelector("p"));
// console.log(document.querySelector("texto"));
// console.log(document.querySelector("Paragrafo"));
let div = document.querySelector("#content");

let paragrafo = document.createElement("p");

let textoParagrafo = document.createTextNode("Parágrafo criado pelo javascript");
paragrafo.appendChild(textoParagrafo)

div.appendChild(paragrafo);
