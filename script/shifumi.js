let button = document.querySelectorAll('.choice');

button.forEach(button => {
    button.addEventListener( 'click', () => {
        const playerChoice = button.textContent;
        console.log(playerChoice);

    });
});
