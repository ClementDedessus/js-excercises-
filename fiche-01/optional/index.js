// source : https://www.pierre-giraud.com/afficher-cacher-div-javascript/

let partie1 = document.getElementById("partie1");
let partie2 = document.getElementById("partie2");

partie1.style.color = "green";
partie2.style.color = "blue";

partie1.addEventListener("mouseover", () => {partie2.style.display = "block";});
partie1.addEventListener("mouseout", () => {partie2.style.display = "none";});

