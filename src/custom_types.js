"use strict";
const alunos = [
    {
        nome: "max",
        curso: ["fullstack", "python"],
        idade: 33,
    },
    {
        nome: "ana",
        curso: ["front-end", "react"],
        idade: 23,
    },
    {
        nome: "lu",
        curso: ["back-end", "node"],
        idade: 28,
    },
];
alunos.push({
    nome: "carlos",
    curso: ["fullstack", "python"],
    idade: 30,
});
const novoAluno = {
    nome: "jose",
    idade: 25,
};
function exibealuno(aluno) {
    console.log(aluno.nome);
}
