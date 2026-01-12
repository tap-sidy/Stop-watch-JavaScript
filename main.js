//les Variables dont on a besoin
let sp, btn_start, btn_stop, t;
let s = 0,
  mn = 0,
  h = 0;

//Function pour initialiser les variable quand la page se charge
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
};

//Maintenant on met en place le compteur

function update_chrono() {
  s++;
  if (s === 60) {
    s = 0;
    mn++;
  }
  if (mn === 60) {
    mn = 0;
    h++;
  }

  //insertion des valeurs dans les spans
  // [0]permet de selectionner le premier span
  //[1]                        le deuxieme span ect...
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "mn";
  sp[2].innerHTML = s + "sec";
}

//mettre en place la function du boutton start
// Bouton start
function start() {
  t = setInterval(update_chrono, 1000);
  btn_start.disabled = true;
}

// Bouton stop
function stop() {
  clearInterval(t);
  btn_start.disabled = false;
}

function reset() {
  clearInterval(t);
  s = 0;
  mn = 0;
  h = 0;

  sp[0].innerHTML = "0h";
  sp[1].innerHTML = "0min";
  sp[2].innerHTML = "0sec";

  btn_start.disabled = false;
}
