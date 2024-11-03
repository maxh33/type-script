"use strict";
class Pessoa {
    // the opitional parameter cant be the first parameter
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz olá!`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        // protected: only the class and its subclasses can access the property
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    // static: the method can be called without an instance of the class
    static retornaNumeroDoBanco() {
        return 125;
    }
    // private: only the class can access the property
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
// extends: inheritance
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo += valor;
    }
}
// instanciando a classe
const contaDoMax = new ContaBancariaPessoaFisica(13489);
ContaBancaria.retornaNumeroDoBanco();
contaDoMax.depositar(100);
//contaDoMax.numeroConta;
