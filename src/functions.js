"use strict";
// area 
function calculaArea(base, altura) {
    return base * altura;
}
// Arrow function
const calculaArea2 = (base, altura) => base * altura;
// rest operator
function somar(...number) {
    //number.reduce((acc, value) => acc + value, 0);
    console.log(number);
}
// void
function teste() {
    if (10 > 5) {
        return '10 é maior que 5';
    }
    else {
        return 5;
    }
}
const resultadoDoTeste = teste();
