let boutton = document.getElementById("myBtn");
let horloge = setInterval(clock, 1000);
let booleanSwitch = true;
boutton.style.backgroundColor = "red";
boutton.style.color = "white";

function clock() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("horloge").innerText = t;
}

function pause() {
  if (booleanSwitch) {
    clearInterval(horloge);
    booleanSwitch = false;
    boutton.innerText = "Start";
    boutton.style.backgroundColor = "blue";
  } else {
    horloge = setInterval(clock, 1000);
    booleanSwitch = true;
    boutton.innerText = "Stop";
    boutton.style.backgroundColor = "red";
  }
}

boutton.addEventListener("click", pause);
