/* MAIL
input email utente.
lista array con email di chi puo accedere.
se email presente nel array stampare valido se no stampare non valido. */
let userEmail = document.getElementById("email");
let accesso = document.getElementById("accesso");
userEmail = prompt("inserire l\'email");
const emailUtenti = ['ale@mail.com', 'davide@mail.com', 'jo@mail.com', 'zoro@mail.com'];

console.log(emailUtenti);

if (emailUtenti.includes(userEmail) ) {
    accesso.innerHTML = "Può accedere";
    console.log('può accedere');
} else {
    accesso.innerHTML = "Non può accedere";
    console.log('non può accedere');
}
