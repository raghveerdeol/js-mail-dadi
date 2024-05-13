


// array vuoto
const x = [];
let mostra = document.querySelector("main > div");
// input number for i < 6
for (let i = 0; i < 6; i++) {
    const number = Number.parseInt(prompt("inserire un numero"));
    // if number % 2 = 0 
    if (number % 2 == 0) {
        // inserire nel array
        x.push(number);
        mostra.innerHTML = x;
        console.log(x);
    } else{
        mostra.innerHTML = x;
        console.log(x);
    }
    
}