let partie1 = document.getElementById("partie1");
let partie2 = document.getElementById("partie2");
let partie3 = document.getElementById("partie3");
let partie4 = document.getElementById("partie4");

partie1.style.color = "green";
partie2.style.color = "blue";
//partie3.style.color = "black";

//mouseover pour le texte 
partie1.addEventListener("mouseover", () => {partie2.style.display = "block";});
partie1.addEventListener("mouseout", () => {partie2.style.display = "none";});

//mouseover pour l'image 
partie3.addEventListener("mouseover", () => {partie4.style.display = "block";});
partie3.addEventListener("mouseout", () => {partie4.style.display = "none";});
