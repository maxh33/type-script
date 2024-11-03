let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 27;

let altura: number = 1.93;

const nacionalidade: string = "brasileira";

//array string 
const colegas: string[] = ["Ana", "Luiza", "Carlos"];
const technologies: Array<string> = ["JavaScript", "TypeScript", "NodeJS"];
const notas: ReadonlyArray<number> = [2, 10, 9, 8, 7, 6];

//tuplas
const lista: [string, boolean, number] = ["teste", true, 1]; 
const lista2: [nome: string, estaChovendo: boolean, nota: number] = ["max", true, 1]; 

let idadeDoMax: number | string = 33;
idadeDoMax = '33';


//any (nao recomendado) usar tipos mais especificos ou personalizados

let dadosDaApi: any;
dadosDaApi = "string";
dadosDaApi =  [1, 2, 3];
dadosDaApi = 10
dadosDaApi = true;

let curso = 'front-end';