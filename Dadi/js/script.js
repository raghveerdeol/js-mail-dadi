

// gnerare 2 numeri random da 1 a 6,
const userNumber = Math.round(Math.random() * 5 + 1);
const computerNumber = Math.round(Math.random() * 5 + 1);
console.log(userNumber, computerNumber)
// il numero più grande vince
if (userNumber === computerNumber) {
    console.log('Partita in stallo');
} else if (userNumber > computerNumber) {
    console.log('Il giocatore ha vinto');
} else {
    console.log('IL computer ha vinto');
}


