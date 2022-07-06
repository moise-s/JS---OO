class contaBancaria {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(a) {
        this._saldo = a;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            console.log('saldo insuficiente')
        } else {
            this._saldo -= valor;
        }
        return this._saldo;
    }

    depositar(valor) {
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends contaBancaria {

    constructor(agencia, numero, cartaoCredito) {
        super (agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(a) {
        this._cartaoCredito = a;
    }
}

class ContaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            console.log('apenas operações menores que R$500 podem ser efetuadas')
        } else if (valor > this._saldo) {
            console.log('saldo insuficiente')
        } else {
            this._saldo -= valor;
        }
        return this._saldo;
    }
}

const contaCorr = new ContaCorrente(1, 234, true);
console.log(contaCorr.saldo);
contaCorr.depositar(1000);
console.log(contaCorr.saldo);
contaCorr.sacar(500);
console.log(contaCorr.saldo);
contaCorr.sacar(600);
console.log(contaCorr.saldo);

const contaPoup = new ContaPoupanca (1, 2);
console.log(contaPoup.saldo);
contaPoup.depositar(1200);
console.log(contaPoup.saldo);

const contaUni = new ContaUniversitaria(1, 2);
console.log(contaUni.saldo);
contaUni.depositar(650);
console.log(contaUni.saldo);
contaUni.sacar(645);
console.log(contaUni.saldo);