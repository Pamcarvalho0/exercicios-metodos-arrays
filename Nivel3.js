console.log('=== Exercícios: Métodos Arrays ===');

// Exercício 1
const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja'];
frutas.splice(1, 1);
console.log('após remover Banana:', frutas);

// Exercício 2
const nomezinho = ['Pam', 'Paloma', 'Gaby', 'Duda', 'Let', 'Manu', 'Kevin'];
nomezinho.splice();
console.log('A partir do 2: ', nomezinho);

// Exercício 3
let cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo'];
cores.splice(2, 1, 'Roxo');
console.log(cores);

// Exercício 4
let animais = ['Cachorro', 'Gato', 'Cavalo'];
animais.splice(2, 0, 'Papagaio', 'Coelho');
console.log(animais);


