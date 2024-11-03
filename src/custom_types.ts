type aluno = {
    nome: string,
    //? significa que o campo é opcional
    curso?: string[],
    idade: number,
}

const alunos: aluno [] = [
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
]

alunos.push({
    nome: "carlos",
    curso: ["fullstack", "python"],
    idade: 30,
});

const novoAluno: aluno = {
    nome: "jose",
    idade: 25,
}

function exibealuno(aluno: aluno) {
    console.log(aluno.nome)   
}