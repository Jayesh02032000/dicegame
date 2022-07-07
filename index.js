                // Random number generation for 1st die//

var randomnumber1=Math.floor(Math.random() * 6)+1;
var randomDiceImage="dice" + randomnumber1 + ".png";
var randomImageSource="images/" + randomDiceImage;
var image =document.querySelectorAll("img")[0];
image.setAttribute("src",randomImageSource);

              // Random number generation for 2nd die//

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice" + randomnumber2 + ".png";
var randomImageSource2="images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Game Tied";
}
