let partie1 = document.getElementById("partie1");
let partie2 = document.getElementById("partie2");
let partie3 = document.getElementById("partie3");
let partie4 = document.getElementById("partie4");
let boutton = document.getElementById("myBtn");

partie1.style.color = "green";
partie2.style.color = "blue";
//partie3.style.color = "red";
partie1.style.textAlign = "center";
partie2.style.textAlign = "center";
partie3.style.textAlign = "center";
partie4.style.textAlign = "center";

//mouseover pour le texte
partie1.addEventListener("mouseover", () => {
  partie2.style.display = "block";
});
partie1.addEventListener("mouseout", () => {
  partie2.style.display = "none";
});

//mouseover pour l'image
partie3.addEventListener("mouseover", () => {
  partie4.style.display = "block";
});
partie3.addEventListener("mouseout", () => {
  partie4.style.display = "none";
});

//boutton
const dateTimeNow = new Date();

function addDateTime(message) {
  return dateTimeNow + message;
}
boutton.addEventListener("click", () => {
  alert(addDateTime(""));
});
