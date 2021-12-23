// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom styles
import "./stylesheets/main.css";

// This is the entry point to your app : add all relevant import and custom code

import image from "./img/Capture.png";

const tableauJeux = ["Fortnite", "Roblox", "Rocket League", "Fifa"];

const main = document.querySelector("main");

const GameReviewImage = document.createElement("img");
GameReviewImage.src = image;;
main.appendChild(GameReviewImage);

tableauJeux.forEach((item) => {
  const div = document.createElement("div");
  div.innerText = item.toString();
  main.appendChild(div);
});


