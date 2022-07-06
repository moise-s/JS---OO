class contaBancaria {

    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
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

class 