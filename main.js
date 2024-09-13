alert("SiriBET");

let limite = 10;
let secret_number = parseInt(Math.random()* limite+1);
let guess;
let guess_count = 1;

while (secret_number != guess) {

    guess = prompt(`Digite um número entre 0 e ${limite}:`);

    if (guess == secret_number) {
        let word_attempts = guess_count > 1 ? 'attempts' : 'attempt';
        alert(`Parabéns!\nVocê venceu em ${guess_count} ${word_attempts}.`);
    }else{
        if (guess < secret_number) {
            alert(`O número secreto é maior que ${guess}.`);
        } else {
            alert(`O número secreto é menor que ${guess}.`);
        }
        guess_count++;
    }
}
