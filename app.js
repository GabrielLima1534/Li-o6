// prompt 1
let nome = prompt("Qual o seu nome");
let idade = Number(prompt("Qual é sua idade?"));

let mensagem = `Olá, ${nome}! Que legal que você tem ${idade} anos.`;

alert(mensagem);
console.log(mensagem);

//prompt 2
let num = Number(prompt("Diga um número"));

let numDobro = num+num

let mensagem2 = `O dobro do número é: ${numDobro}`;

alert(mensagem2);
console.log(mensagem2);


//prompt 3
let num3 = Number(prompt("Diga um número"));

let num4 = Number(prompt("Diga outro número"));

let numFinal = num3+num4

let mensagem3 = `A soma dos números é: ${numFinal}`;

alert(mensagem3);
console.log(numFinal);

//prompt 4
let numero = Number(prompt("Digite um número para saber se é par:"));

if (numero % 2 === 0) {
    console.log("O número é Par");
} else {
    console.log("O número é Ímpar");
}

let mensagem4 = `O número ${numero} é ${numero % 2 === 0 ? "Par" : "Ímpar"}`;

alert(mensagem4);
console.log(mensagem4);





