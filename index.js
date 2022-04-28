

// gera um valor aleatorio para o cumputador
function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    switch (random) {
        case 0:
            return 'Pedra';
        case 1:
            return 'Papel';
        case 2:
            return 'Tesoura';
    }
}
//faz a verificação de quem ganhou na rodada
function round(playSelector,computerSelector){

    playSelector = 'Pedra'
    computerSelector = computerPlay();

    if(playSelector === 'Pedra' && computerSelector === 'Pedra'){
         return 'empate';
    }
    else if(playSelector === 'Pedra' && computerSelector === 'Papel' ){
        return 'derrota';
    }
    else if(playSelector === 'Pedra' && computerSelector === 'Tesoura'){
        return 'vitoria';
    }
    else if(playSelector === 'Papel' && computerSelector === 'Pedra'){
        return 'derrota';
    }
    else if(playSelector === 'Papel' && computerSelector === 'Papel'){
        return 'empate';
    }
    else if(playSelector === 'Papel' && computerSelector === 'Tesoura'){
        return 'derrota';
    }
    else if(playSelector === 'Tesoura' && computerSelector === 'Pedra'){
        return 'vitoria';
    }
    else if(playSelector === 'Tesoura' && computerSelector === 'Papel'){
        return 'vitoria';
    }
    else if(playSelector === 'Tesoura' && computerSelector === 'Tesoura'){
        return 'empate';
    }
}

function game(playRound){
    
}
 


