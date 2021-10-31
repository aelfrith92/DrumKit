function alternativeEventListener(typeOfEvent, callback) {
  //cosa fa questa funzione? Rileva se un particolare evento si è verificato
  var eventoInSe = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2
  }

  if (eventoInSe.eventType === typeOfEvent) //typeOfEvent fornito dal richiamo esterno
    callback(eventoInSe);
}

debugger;
alternativeEventListener("keypress", function(event) {

  console.log(event);

});
