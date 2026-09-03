let playlist = [
    'Numb',
    'In The End',
    'Enter Sandman',
    'Fear of the Dark',
    'Breaking the Law',
    'Master of Puppets',
    'The Trooper',
    'Paranoid',
];
console.log('A música In The End está na playlist? ', playlist.includes('In The End'));

console.log('Posição da música In The End:', playlist.indexOf('In The End'));

let musicasSelecionadas = playlist.slice(1, 4);
console.log('Músicas selecionadas (1 a 4 ):', musicasSelecionadas.join(', '));

let posicaoRemover = 2;
console.log('Música que será removida:', playlist[posicaoRemover]);

let musicaRemovida = playlist.splice(posicaoRemover, 1);

console.log('Playlist depois da remoção:', playlist.join(', '));
console.log('Música removida:', musicaRemovida);

let novaMusica = 'Nothing Else Matters';
let posicao = 2;

playlist.splice(posicao, 0, novaMusica);

console.log('Playlist depois da inserção:', playlist.join(', '));

let musicasOrdenadas = playlist.sort();
console.log('Músicas em ordem alfabética:', musicasOrdenadas.join(', '));

let musicasInvertidas = playlist.reverse();
console.log('Músicas em ordem inversa:', musicasInvertidas.join(', '));

let unicaString = playlist.join(' | ');
console.log('Com barra:', unicaString);
