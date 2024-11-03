"use strict";
// multipie function
function multiplicacao(a, b) {
    try {
        return a * b;
    }
    catch (error) {
        console.error('Error in multiplicacao', error);
        return 0;
    }
}
// say hello function
function sayHello(name) {
    try {
        return `Hello ${name}`;
    }
    catch (error) {
        console.error('Error in sayHello', error);
        return '';
    }
}
console.log(multiplicacao(2, 3));
console.log(sayHello('Max'));
