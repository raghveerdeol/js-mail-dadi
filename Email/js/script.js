/* MAIL
input email utente.
lista array con email di chi puo accedere.
se email presente nel array stampare valido se no stampare non valido. */

let userEmail = document.getElementById("email");
const submit = document.getElementById("submit");
const emailUtenti = ['ale@mail.com', 'davide@mail.com', 'jo@mail.com', 'zoro@mail.com'];
let accesso = document.getElementById("accesso");
let reset = document.getElementById("reset");


submit.addEventListener('click', function() {
    console.log(userEmail.value);

    if (emailUtenti.includes(userEmail.value) ) {
    accesso.innerHTML = "Può accedere";
    console.log('può accedere');
} else {
    accesso.innerHTML = "Non può accedere";
    console.log('non può accedere');
}
})
console.log(emailUtenti);

reset.addEventListener('click', function () {
    userEmail.value = "";
    accesso.innerHTML = "";
})