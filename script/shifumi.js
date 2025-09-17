const button = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const labelDraw = document.getElementById('draw');
const labelWin = document.getElementById('win');
const labelLoose = document.getElementById('loose');
const choices = ["Pierre", "Feuille", "Ciseaux"];
const score =  {win: 0, loose : 0, draw : 0};
const reset = document.getElementById('reset');

button.forEach(button => {
    button.addEventListener( 'click', () => {
        const playerChoice = button.textContent;
        const robotChoice = choices[Math.floor(Math.random() * 3)];

        let resultNow;

        console.log(playerChoice);
        console.log(robotChoice);

        if(playerChoice === robotChoice){
            resultNow = 'draw'
        }

        else if(playerChoice === "Pierre" && robotChoice == "Ciseaux" ||
            playerChoice === "Feuille" && robotChoice == "Pierre" ||
            playerChoice === "Ciseaux" && robotChoice == "Feuille"){
                resultNow = 'win'
        }
        else{
            resultNow = 'loose'
        }

        score[resultNow]++;
        majResult();

        result.innerHTML = `I play : ${playerChoice}<br>The robot plays : ${robotChoice}<br>It's a <strong>${resultNow === 'draw' ? 'Draw !!' : resultNow === 'win' ? 'Win !!' : 'Looser AHAH !!'}</strong>`;
    
    });
});

function majResult(){
    labelWin.textContent = "Number of wins : " + score.win;
    labelLoose.textContent = "Number of looses : " + score.loose;
    labelDraw.textContent = "Number of draws : " + score.draw;
}

reset.addEventListener( 'click', () => {
    score.win = 0;
    score.loose = 0;
    score.draw = 0;
    majResult();
    result.innerHTML = '';
});
