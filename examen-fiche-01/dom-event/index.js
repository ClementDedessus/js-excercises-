let click = document.querySelector("#boutonClic");

click.addEventListener("click", (event) => {
  click.innerHTML = event.detail;
  if (event.detail === 5) {
    click.innerHTML = "Bravo, bel échauffement ! ";
  }
  if (event.detail === 10) {
    click.innerHTML = "Vous êtes passé maître en l’art du clic ! ";
  }
  if (event.detail === 20) {
    click.innerHTML = "Vous êtes un champion ! ";
  }
});

let d1 = document.getElementById("d1");
d1.addEventListener("mouseover", () => {
  p1.style.display = "block";
  p2.style.display = "block";
});
d1.addEventListener("mouseout", () => {
  p1.style.display = "none";
  p2.style.display = "none";
});
