/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

var arrayEmail = ["maske@gmail.com", "cotcot@gmail.com", "tocitoci@gmail.com"]

var email_user = prompt("Inserisci email");

var presente = false;

for(var i=0; i<arrayEmail.length; i++){
  var email = arrayEmail[i]
  if(email === email_user) {
    presente = true;
  }
}

if(presente){
  document.getElementById('msgInfo').innerHTML = "Benvenuto nel sito!";
}else{
  document.getElementById('msgInfo').innerHTML = "Vade retro satana!";
}