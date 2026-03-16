const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  // prompt 1
  let nome = await ask("Qual o seu nome");
  let idade = Number(await ask("Qual é sua idade?"));

  let mensagem = `Olá, ${nome}! Que legal que você tem ${idade} anos.`;

  console.log(mensagem);

  //prompt 2
  let num = Number(await ask("Diga um número"));

  let numDobro = num + num;

  let mensagem2 = `O dobro do número é: ${numDobro}`;

  console.log(mensagem2);

  //prompt 3
  let num3 = Number(await ask("Diga um número"));

  let num4 = Number(await ask("Diga outro número"));

  let numFinal = num3 + num4;

  let mensagem3 = `A soma dos números é: ${numFinal}`;

  console.log(mensagem3);

  //prompt 4
  let numero = Number(await ask("Digite um número para saber se é par:"));

  if (numero % 2 === 0) {
    console.log("O número é Par");
  } else {
    console.log("O número é Ímpar");
  }

  let mensagem4 = `O número ${numero} é ${numero % 2 === 0 ? "Par" : "Ímpar"}`;

  console.log(mensagem4);

  rl.close();
}

main();





