// export class Conta {

//     private _numero: number; //atributos PRIVADOS são declarados com underline antes do nome
//     private _agencia: number;
//     private _tipo: number;
//     private _titular: string;
//     private _saldo: number;

// constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){

//    this._numero = numero;
//    this._agencia = numero;
//    this._tipo = numero;
//    this._titular = string;
//    this._saldo = numero;

// }
//     }
// public get number(){
//     return this._numero;
// }
// public set numero(numero: number){
//     this._numero = numero;
// }
// public get agencia() {
//     return this._agencia;
// }

// public set agencia(agencia: number) {
//     this._agencia = agencia;
// }

// public get tipo() {
//     return this._tipo;
// }

// public set tipo(tipo: number) {
//     this._tipo = tipo;
// }

// public get titular() {
//     return this._titular;
// }

// public set titular(titular: string) {
//     this._titular = titular;
// }

// public get saldo() {
//     return this._saldo;
// }

// public set saldo(saldo: number) {
//     this._saldo = saldo;
// }

export class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public get numero() {
    return this._numero;
  }

  public set numero(numero: number) {
    this._numero = numero;
  }

  public get agencia() {
    return this._agencia;
  }

  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get tipo() {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get titular() {
    return this._titular;
  }

  public set titular(titular: string) {
    this._titular = titular;
  }

  public get saldo() {
    return this._saldo;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\nSaldo Insuficiente");
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta Corrente";
        break;
      case 2:
        tipo = "Conta Poupança";
        break;
    }
    console.log("\n\n*********************************************************")
    console.log("DADOS DA CONTA")
    console.log("*********************************************************")
    console.log("NUMERO DA CONTA: " + this._numero);
    console.log("AGENCIA: " + this._agencia);
    console.log("TIPO DA CONTA: " + tipo);
    console.log("TITULAR: " + this._titular);
    console.log("SALDO: " + this._saldo);

  }
}
