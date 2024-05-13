/* MAIL
input email utente.
lista array con email di chi puo accedere.
se email presente nel array stampare valido se no stampare non valido. */

const userEmail = prompt("inserire l\'email");
const emailUtenti = ['ale@mail.com', 'davide@mail.com', 'jo@mail.com', 'zoro@mail.com'];
console.log(emailUtenti);

if (emailUtenti.includes(userEmail) ) {
    console.log('può accedere');
} else {
    console.log('non può accedere');
}