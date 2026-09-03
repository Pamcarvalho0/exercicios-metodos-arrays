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

function exibirMenu() {
    console.log('\n===== MINHA PLAYLIST =====');
    console.log('1 - Pesquisar música');
    console.log('2 - Criar seleção');
    console.log('3 - Remover música');
    console.log('4 - Inserir música');
    console.log('5 - Ordenar A-Z');
    console.log('6 - Inverter playlist');
    console.log('7 - Exibir playlist');
    console.log('0 - Sair');
}

let opcoesEscolhidas = ['1', '2', '3', '4', '5', '6', '7', '0'];

for (let i = 0; i < opcoesEscolhidas.length; i++) {
    let opcao = opcoesEscolhidas[i];

    exibirMenu();
    console.log('Opção escolhida:', opcao);

    switch (opcao) {
        case '1': {
            let nomeBusca = 'In The End';
            let existe = playlist.includes(nomeBusca);
            console.log(existe ? 'A música está na playlist!' : 'A música NÃO está na playlist.');
            if (existe) {
                console.log('Posição:', playlist.indexOf(nomeBusca));
            }
            break;
        }

        case '2': {
            let selecao = playlist.slice(1, 4);
            console.log('Nova seleção:', selecao.join(' | '));
            console.log('Playlist original (intacta):', playlist.join(' | '));
            break;
        }

        case '3': {
            let posRemover = 2;
            console.log('Música que será removida:', playlist[posRemover]);
            playlist.splice(posRemover, 1);
            console.log('Playlist atualizada:', playlist.join(' | '));
            break;
        }

        case '4': {
            let novaMusica = 'Nothing Else Matters';
            let posInserir = 2;
            playlist.splice(posInserir, 0, novaMusica);
            console.log('Playlist atualizada:', playlist.join(' | '));
            break;
        }

        case '5': {
            playlist.sort();
            console.log('Playlist em ordem alfabética:', playlist.join(' | '));
            break;
        }

        case '6': {
            playlist.reverse();
            console.log('Playlist invertida:', playlist.join(' | '));
            break;
        }

        case '7': {
            console.log(playlist.join(' | '));
            break;
        }

        case '0': {
            console.log('Saindo... até mais!');
            break;
        }

        default: {
            console.log('Opção inválida, tente novamente.');
        }
    }
}
