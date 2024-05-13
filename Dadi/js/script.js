

// gnerare 2 numeri random da 1 a 6,
const userNumber = Math.round(Math.random() * 5 + 1);
const computerNumber = Math.round(Math.random() * 5 + 1);
console.log(userNumber, computerNumber)
// il numero più grande vince
const userElement = document.getElementById("usernumber");
const computerElement = document.getElementById("computernumber");
const risultato = document.getElementById("risultato")

if (userNumber === computerNumber) {
    risultato.innerHTML = "Partita in stallo";
    console.log('Partita in stallo');
    
} else if (userNumber > computerNumber) {
    risultato.innerHTML = "Il giocatore ha vinto"
    console.log('Il giocatore ha vinto');
} else {
    risultato.innerHTML = "Il computer ha vinto"
    console.log('IL computer ha vinto');
}

userElement.innerHTML = userNumber;
computerElement.innerHTML = computerNumber;