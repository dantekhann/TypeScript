import { ContaCorrente } from "../ContaCorrente";
import { Conta } from "./Conta";
import { ContaPoupanca } from "../ContaPoupanca";

export function main() {
  const conta: Conta = new Conta(1, 123, 1, "Thrall Martelo da Perdição", 1000.0);

  conta.visualizar();

  conta.sacar(500.0);
  conta.visualizar();

  conta.depositar(1000.0);
  conta.visualizar();

  const contacorrente: ContaCorrente = new ContaCorrente(2, 456, 1, "Garrosh Grito Infernal", 1000.0, 500.0); 
  contacorrente.visualizar();

  contacorrente.sacar(1000.0);
  contacorrente.visualizar();

  contacorrente.depositar(2000.0);
  contacorrente.visualizar();

const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 789, 2, "Sylvanas Correventos", 1000.0, 10.0); 
  contapoupanca.visualizar();

  contapoupanca.sacar(100.0);
  contapoupanca.visualizar();

  contapoupanca.depositar(1000.0);
  contapoupanca.visualizar();
}

main(); //a chamada da função main faz com que essas funções sejam chamadas ao executar o código do arquivo Conta

//Ao executar o código progride da seguinte forma
//Primeiro visualizamos os valores da const conta, depois fazemos um saque e por fim um depósito
