console.log('=== Exercícios: Métodos Arrays ===');

// Exercício 1
let produtos = ['Arroz', 'Feijão', 'Macarrão', 'Leite', 'Café', 'Açúcar'];
console.log("Existe café?:", produtos.includes("Café"));
console.log("Posição do café:", produtos.indexOf("Café"));
console.log("Cópia:", produtos.slice("Café"));
produtos.splice(3, 1);
console.log(produtos);
console.log("Texto: ", produtos.join(", "));


// Exercício 2
let nomes = ['Pam', 'Paloma', 'Gaby', 'Duda', 'Let', 'Manu', 'Kevin', 'Thiago'];
console.log(nomes.slice());
console.log(nomes.sort());
console.log(nomes.reverse());
console.log(nomes.join(" "));

// Exercícios 3
let musica = ['De love', 'Anos luz', 'Solto', 'Camisa P', 'Cicatrizes', 'Preferida', 'Celine', 'Freestyle'];
console.log("A música Anos luz está na lista?: ", musica.includes("Anos luz"));
console.log("A posição dela é: ", musica.indexOf("Anos luz"));
console.log(musica.slice());
console.log(musica.splice(1,2));
console.log(musica.sort());
console.log(musica.reverse());
console.log(musica.join());
