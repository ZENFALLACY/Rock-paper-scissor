const Score = JSON.parse(localStorage.getItem('Score')) ||{
    Wins: 0,
    Losses: 0,
    Ties: 0
};
updateScoreElement();
function Reset(){
    Score.Losses = 0;
    Score.Ties = 0;
    Score.Wins = 0;
    localStorage.removeItem('Score')
    updateScoreElement();
}
function Playgame(Playermove){
    const Computermove = Pickcomputermove()
    let result = '';
    if (Playermove === 'Scissor'){
        if (Computermove === 'Rock'){
                result = 'You Lost';
        }else if (Computermove === 'Paper'){
            result = 'You Win';
        }else if(Computermove === 'Scissor'){
            result = 'Tie';
        }    
    }
    else if (Playermove === 'Paper'){
        if (Computermove === 'Rock'){
        result = 'You Win';
        }else if (Computermove === 'Paper'){
            result = 'Tie';
        }else if(Computermove === 'Scissor'){
            result = 'You Lost';
        }

    }
    else if (Playermove === 'Rock'){
        if (Computermove === 'Rock'){
        result = 'Tie';
        }else if (Computermove === 'Paper'){
            result = 'You Lost';
        }else if(Computermove === 'Scissor'){
            result = 'You Win';
        }
    }
    if (result === 'You Win'){
        Score.Wins +=1;
    }else if(result === 'You Lost'){
        Score.Losses +=1
    }else if(result === 'Tie'){
        Score.Ties +=1
    }
    localStorage.setItem('Score', JSON.stringify(Score));

    updateScoreElement();

    const emojiMap = { 'Rock': '🪨', 'Paper': '📄', 'Scissor': '✂️' };
    document.querySelector('.js-move').innerHTML = `You picked ${emojiMap[Playermove]} ${Playermove}. Computer picked ${emojiMap[Computermove]} ${Computermove}.`;

    document.querySelector('.js-result').innerHTML = result;

    //alert(`You picked ${Playermove}. Computer picked ${Computermove}. ${result}\n Wins: ${Score.Wins} Loss: ${Score.Losses} Tie: ${Score.Ties}`);

}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Ties}`;
}
function Pickcomputermove(){
    const randomnum = Math.random();
    let Computermove = '';
    if (randomnum >=0 && randomnum < 1/3){
        Computermove = 'Rock';
    }else if (randomnum >=1/3 && randomnum < 2/3){
        Computermove = 'Paper';
    }else{
        Computermove = 'Scissor';
    }
    return Computermove;
}