// Random Numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Dice function
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Who wins
var whoWins = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
  whoWins.innerHTML = "🚩️Jogador 1 venceu!";
} else if (randomNumber1 < randomNumber2) {
  whoWins.innerHTML = "Jogador 2 venceu!🚩️";
} else if (randomNumber1 === randomNumber2) {
  whoWins.innerHTML = "É um empate!🎌️";
}
