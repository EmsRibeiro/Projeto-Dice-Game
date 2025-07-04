let randomDice1 = Math.floor(Math.random() * 6) + 1;
// Arredonda o numero aleatório, multiplica por 6 e soma 1, fazendo ir de 1~6

let randomDiceImage = "dice" + randomDice1 + ".png";
// outpout: dice1-2-3-4-5-6.png como nas img salvas

let randomImageSource = "images/" + randomDiceImage;
// Output: o caminho src das imagens!

let dicePlayer1 = document.querySelectorAll("img")[0];

dicePlayer1.setAttribute("src", randomImageSource);
// quero substituir o src pela variavel acima

let randomDice2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomDice2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let dicePlayer2 = document.querySelectorAll("img")[1];

dicePlayer2.setAttribute("src", randomImageSource2);

// logica para quem venceu
if (randomDice1 > randomDice2) {
  document.querySelectorAll("h1")[0].innerText = "🏆PLAYER 1🏆";
} else if (randomDice1 < randomDice2) {
  document.querySelectorAll("h1")[0].innerText = "🏆PLAYER 2🏆";
} else {
  document.querySelector("h1").innerText = "🚩Empate🚩";
}

// Logica de reload pro button
document.querySelector("button").addEventListener("click", function(){
  location.reload();
});
