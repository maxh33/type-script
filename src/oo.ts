class Pessoa {
    nome: string;
    renda?: number;
    // the opitional parameter cant be the first parameter
    constructor(nome : string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} diz olá!`;
    }
}

class ContaBancaria {
    // protected: only the class and its subclasses can access the property
    protected saldo: number = 0;
    // public: everyone can access the property
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }
    // static: the method can be called without an instance of the class
    static retornaNumeroDoBanco() {
        return 125;
    }
    // private: only the class can access the property
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}
// extends: inheritance
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += valor;
    }
}
// instanciando a classe
const contaDoMax = new ContaBancariaPessoaFisica(13489);
ContaBancaria.retornaNumeroDoBanco();
contaDoMax.depositar(100);
//contaDoMax.numeroConta;