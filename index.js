img1 = document.querySelector(".img1");
img2 = document.querySelector(".img2");

function gameDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
	img1.src = "images/dice" + randomNumber1 + ".png";
	img2.src = "images/dice" + randomNumber2 + ".png";

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Play 1 Wins! 😎";
    }else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "Play 2 Wins! 🥳";
    }else{
        document.querySelector("h1").innerText = "Draw! 😱";
    }

}


img1.addEventListener("click", gameDice);
img2.addEventListener("click", gameDice);
 