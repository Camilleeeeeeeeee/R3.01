let button = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const choices = ["Pierre", "Feuille", "Ciseaux"];
const score =  {win: 0, loose : 0, draw : 0};

function majResult(){
    labelwin.textContent = "Number of wins : " + win;
    labelloose.textContent = "Number of looses : " + loose;
    labeldraw.textContent = "Number of draws : " + draw;
}

button.forEach(button => {
    button.addEventListener( 'click', () => {
        const playerChoice = button.textContent;
        const robotChoice = choices[Math.floor(Math.random() * 3)];

        let resultNow;

        console.log(playerChoice);
        console.log(robotChoice);

        if(playerChoice == robotChoice){
            resultNow = "draw"
            draw++;
        }

        if(playerChoice == "Pierre" && robotChoice == "Ciseaux" ||
            playerChoice == "Feuille" && robotChoice == "Pierre" ||
            playerChoice == "Ciseaux" && robotChoice == "Feuille"){
                resultNow = "win"
                win++;
        }
        else{
            resultNow = "loose"
            loose++;
        }

        score[result]++;
        majResult();

        result.innerHTML = `I play : ${playerChoice}<br>The robot plays : ${robotChoice}<br>It's a <strong>${resultNow === 'draw' ? 'Draw !!' : resultNow === 'win' ? 'Win !!' : 'Looser AHAH !!'}</strong>`;
    
    });
});
