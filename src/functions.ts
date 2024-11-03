// area 
function calculaArea(base: number, altura: number): number {
  return base * altura;
}
// Arrow function
const calculaArea2 = (base: number, altura: number): number => base * altura;

// rest operator
function somar(...number: number[]): void {
    //number.reduce((acc, value) => acc + value, 0);
    console.log(number)
}

// void

function teste(): string | number {
    if (10 > 5) {
        return '10 é maior que 5';
    } else {
        return 5;
    }
}

const resultadoDoTeste = teste();