let button = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const choices = ["Pierre", "Feuille", "Ciseaux"];

button.forEach(button => {
    button.addEventListener( 'click', () => {
        const playerChoice = button.textContent;
        const robotChoice = choices[Math.floor(Math.random() * 3)];

        let resultNow;

        console.log(playerChoice);
        console.log(robotChoice);

        if(playerChoice == robotChoice){
            resultNow = "draw"
        }

        if(playerChoice == "Pierre" && robotChoice == "Ciseaux" ||
            playerChoice == "Feuille" && robotChoice == "Pierre" ||
            playerChoice == "Ciseaux" && robotChoice == "Feuille"){
                resultNow = "win"
        }
        else{
            resultNow = "loose"
        }

        result.innerHTML = `I play : ${playerChoice}<br>The robot plays : ${robotChoice}<br>It's a <strong>${resultNow === 'draw' ? 'Draw !!' : resultNow === 'win' ? 'Win !!' : 'Looser AHAH !!'}</strong>`;
    });
});
