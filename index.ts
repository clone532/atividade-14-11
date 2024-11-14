let abate : number = Number(prompt("Digite a quantidade de abates: "));
let assistencias: number = Number(prompt("Digite a quantidade de assistencias: "));
let mortes: number = Number(prompt("Digite a quantidade de mortes: "));

let KDA: number = (abate + assistencias) / mortes;

console.log("KDA = " + KDA);