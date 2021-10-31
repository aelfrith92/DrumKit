//Event Listeners con funzioni accorpate

// Quantità degli elementi/oggetti HTML
var numberOfDrums = document.querySelectorAll(".drum").length;

// Perché il ciclo: innanzitutto viene eseguito tante volte, quanti sono gli elementi.
// In secondo luogo, imposta in ascolto gli oggetti (".drum"): ogni volta che viene premuto
// un tasto, controlla che sia uno di quelli previsti attraverso lo switch.
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // la seguente variabile cattura il contenuto HTML all'interno dei tag button, per poter
    // effettuare il controllo con lo switch. NOTA BENE: a chi si riferisce this. in un addEventListener?
    // all'oggetto che ha ricevuto l'evento, ergo, il bottone coinvolto.
    // LETTURA:
    // 1. click innesca l'evento solo quando avviene sul querySelector coinvolto;
    // 2. viene eseguita la funzione con uno switch che controlla quale lettera vi sia all'interno
    //    dell'oggetto cliccato (solo perché fattivamente presente come testo);
    // 3. Come fa a risalire alla lettera? this. si occupa di individuare l'oggetto protagonista del click
    // .this = the button that triggered the event.
    playSound(this.innerHTML); //dovrebbe funzionare anche con innerText, quello che conta è la lettera
  });
}

function playSound(strumento) {
  blink(strumento);
  switch (strumento) {
    case "w":
      //Perché creare un oggetto per il suono? Perché dev'essergli associata l'azione-metodo .play();
      var tom1 = new Audio("sounds/tom-1.mp3"); // non è subito evidente, ma questo è un costruttore
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
  }
}

// le pressioni con mouse e tocco hanno un blink a 100 ms
function blink(lettera) {
  var percussione = document.querySelector("." + lettera);
  percussione.classList.add("pressed");
  setTimeout(function() {
    percussione.classList.remove("pressed");
  }, 100);
}

//sostituito da blink()
/*function backToNormal(lettera) {
  document.querySelector("." + lettera).style.color = "#DA0463";

}*/

//l'uso dei tasti della tastiera invece utilizza degli eventi che rilevano la durata
//esatta del rilascio del tasto, non un tempo di default come per blink()
document.addEventListener("keydown", function(event) {
  playSound(event.key);

});

//non c'è bisogno di rilevare quando un tasto viene rilasciato, poiché interviene blink()
/*document.addEventListener("keyup", function(event) {

  backToNormal(event.key);

});*/

/*for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("mouseup", function() {

    backToNormal(event.srcElement.classList[0]);
  });
}*/

/*
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
*/
