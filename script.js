var playerOptions = document.querySelectorAll('.player-options img')
var random = ''

function winValidation(){

    var winInform = document.querySelector('.win-inform, h2')
    var resultBackground = document.querySelector('.result-background')
    
    if(playerChoice == 'pedra'){
        if(enemyChoice == 'pedra'){
            //EMPATE  
            winInform.innerHTML = 'O Jogo Empatou!'
            resultBackground.style.backgroundColor = '#ccc'
        }
            
        else if(enemyChoice == 'papel'){
            //PERDE
            winInform.innerHTML = 'O Jogador Perdeu!'
            resultBackground.style.backgroundColor = 'red'
        }

        else if(enemyChoice == 'tesoura'){
            //ViTORIA
            winInform.innerHTML = 'O Jogador Venceu!'
            resultBackground.style.backgroundColor = 'green'            
        }
    }
    if(playerChoice == 'papel'){
        if(enemyChoice == 'pedra'){
            //VITORIA 
            winInform.innerHTML = 'O Jogador Venceu!' 
            resultBackground.style.backgroundColor = 'green'
        }
            
        else if(enemyChoice == 'papel'){
            //EMPATE
            winInform.innerHTML = 'O Jogo Empatou!'
            resultBackground.style.backgroundColor = '#ccc'
        }

        else if(enemyChoice == 'tesoura'){
            //PERDE
            winInform.innerHTML = 'O Jogador Perdeu!'
            resultBackground.style.backgroundColor = 'red'
        }
    }//
    if(playerChoice == 'tesoura'){
        if(enemyChoice == 'pedra'){
            //PERDE  
            winInform.innerHTML = 'O Jogador Perdeu!'
            resultBackground.style.backgroundColor = 'red'
        }
            
        else if(enemyChoice == 'papel'){
            //VITORIA
            winInform.innerHTML = 'O Jogador Venceu!'
            resultBackground.style.backgroundColor = 'green'
        }

        else if(enemyChoice == 'tesoura'){
            //EMPATE
            winInform.innerHTML = 'O Jogo Empatou!'
            resultBackground.style.backgroundColor = '#ccc'
        }
    }
}

function resetEnemy(){
    var enemyOptions = document.querySelectorAll('.enemy-options img')
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3
    }
}

function randomChoice(){
    random = (Math.floor(Math.random() * 3));

    resetEnemy()
    var enemyOptions = document.querySelectorAll('.enemy-options img')
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == random){
            enemyOptions[i].style.opacity = 1
            enemyChoice = enemyOptions[i].getAttribute('opt')
        }
        
    }
    winValidation()
}

function resetOpacity(){
    for(var i = 0; i < playerOptions.length; i++){
        playerOptions[i].style.opacity = 0.3
        
}
}

for(var i = 0; i < playerOptions.length; i++){
    playerOptions[i].addEventListener('click', (e)=>{
        resetOpacity();
        e.target.style.opacity = 1
        
        playerChoice = e.target.getAttribute('opt')
        randomChoice()

        
    })    
}



