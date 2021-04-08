/*generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */

var user_number = prompt("Inserisci un numero da 1 a 6");
if(user_number <1 || user_number>6){
  alert('ERROR!')
}
//console.log(user_number)

var comp_number = Math.floor(Math.random() *6) + 1;
//console.log(comp_number)

var msg;

if(user_number > comp_number){
  msg="Complimenti hai vinto!"
}else if(user_number == comp_number){
  msg="Pareggio, ritenta!"
}else{
  msg="Torna a casa, hai perso!"
}

document.getElementById('msgInfo').innerHTML = msg;