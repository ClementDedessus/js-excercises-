let click = document.querySelector("#boutonClic");
click.addEventListener("click", event => {
  click.innerHTML = event.detail;
  if (event.detail === 5) {
    click.innerHTML = "Bravo, bel échauffement !"
  }
  if (event.detail === 10) {
    click.innerHTML = "Vous êtes passé maître en l’art du clic !"
  }
});