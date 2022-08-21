
// Calculo de factorial de 10 con un bucle for

// 10!

let numero = 10;

for (i = 1; i<11; i++) {
    numero*=i
    console.log(numero)
}
console.log("Fin");



// calculo de factorial de 10 con un bucle 

let numero2 = 10;
let factorial = 1;

while (factorial < 10) {
    numero2= numero2 * factorial;
    console.log(numero2);
    factorial++;
    console.log(factorial);
}


let factorial1 = 1;
let num = 10;
while (true) {
    factorial1 *= num; //factorial1 = factorial1 * num
    console.log(factorial1);
    console.log(num);
    num--;
    console.log(num);
    if (num === 1) break;
}