let button = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const choices = ["Pierre", "Feuille", "Ciseaux"];
let win = 0;
let loose = 0;
let draw = 0;

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
            majResult();
        }

        if(playerChoice == "Pierre" && robotChoice == "Ciseaux" ||
            playerChoice == "Feuille" && robotChoice == "Pierre" ||
            playerChoice == "Ciseaux" && robotChoice == "Feuille"){
                resultNow = "win"
                win++;
                majResult();
        }
        else{
            resultNow = "loose"
            loose++;
            majResult();
        }

        result.innerHTML = `I play : ${playerChoice}<br>The robot plays : ${robotChoice}<br>It's a <strong>${resultNow === 'draw' ? 'Draw !!' : resultNow === 'win' ? 'Win !!' : 'Looser AHAH !!'}</strong>`;
    
    });
});
