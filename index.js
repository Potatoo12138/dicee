function generateRandomNumber(){
  var randomNumber = Math.random();
  randomNumber = Math.ceil(randomNumber*6);
  return randomNumber;
}

var randomNumber1 = generateRandomNumber();
var img1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = generateRandomNumber();
var img2 = "images/dice"+randomNumber2+".png";

var diceePlayer1 = document.querySelector("img.img1");
diceePlayer1.setAttribute("src", img1);

var diceePlayer2 = document.querySelector("img.img2");
diceePlayer2.setAttribute("src", img2);

var h1Selector = document.querySelector(".container h1");

if (randomNumber1 > randomNumber2){
  h1Selector.innerHTML = "<i class='fab fa-angellist'></i> Player1 WIN";
} else if (randomNumber1 < randomNumber2){
  h1Selector.innerHTML = "Player2 WIN <i class='fab fa-angellist'></i>";
} else {
  h1Selector.textContent = "DRAW!"
}
