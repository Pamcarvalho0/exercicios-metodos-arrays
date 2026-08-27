console.log("=== Exercícios: Métodos Arrays ===")

// Exercício 1
const frutas = [
    "Kiwi",
    "Uva",
    "Abacaxi",
    "Morango",
    "Tangerina"
];
console.log("Tem Morango?", frutas.includes("Morango"));

// Exercício 2
let linguagens = ["JavaScript", "Python", "Java", "C#", "PHP"];
console.log("Existe JavaScript?", linguagens.includes("JavaScript"));
console.log("Existe Python?", linguagens.includes("Python"));
console.log("Existe C++?", linguagens.includes("C++"));

// Exercício 3
const nomes = [
    "Pam",
    "Manu",
    "Let",
    "Duda",
    "Gaby",
    "Paloma"
];
console.log("Em que posição a Let está: ", nomes.indexOf("Let"));
// Exercício 4
console.log("Em que posição o Kevinho está?", nomes.indexOf("Kevin") );
