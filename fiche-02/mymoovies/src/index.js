// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom styles
import "./stylesheets/main.css";

// This is the entry point to your app : add all relevant import and custom code

import mw from "./img/NW_TWITTERSHARE_600x300.jpg";

const isEven = require("is-even");

// This is the entry point to your app : add all relevant import and custom code

const array = ["bear", "arbre", "castle", "armor", "dragon"];

const main = document.querySelector("main");

array.forEach((item, index) => {
  const div = document.createElement("div");
  div.innerText = item + " index " + index + " is even ? " + isEven(index).toString;
  div.addEventListener("mouseenter", onMouseEnter);
  main.apenChild(div);
});

const newworldimage = document.createElement("img");
newworldimage.src = mw;
main.appendChild(newworldimage);

function onMouseEnter(event) {
  alert("new world" + event.target.innerHTML);
}
