var guesses = 0;
var word = " ";
var guessedLetters = [];

function startGame() {
    var myArray = ["courderoy", "hangry", "demoographic", "perish", "exemplify"]
    word = myArray[Math.floor(Math.random() * myArray.length)];
    displayWord();
    var blankArray = [];
    for(i = 0; i < word.length; i++) {
         blankArray.push("_");
    }
    blankArray = document.getElementById("wordSpaces");
console.log(word);
}

function displayWord(){
    var theWord = "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1) {
            theWord += word[i];
        } else {
            theWord += " _ ";
        }
    }
    document.getElementById("wordSpaces").innerHTML = theWord;
    if (word == theWord) {
        document.getElementById("win").innerHTML = "CONGRATS! You win! :)";
    }

}

function guessLetter() {
    var currentLetter = document.getElementById("guessLetter").value;
    if (word.indexOf(currentLetter) == -1) {
        document.getElementById("wrongLetters").innerHTML += " " + currentLetter + " ";
        guesses += 1;
    }
        if (guesses < 5) {
        guessedLetters.push(document.getElementById("guessLetter").value);
        displayWord();
        document.getElementById("guessLetter").value = ""
    }
    else {
        document.getElementById("lose").innerHTML = "You Lose!";
        document.getElementById("correctWord").innerHTML = "The word was" + " " + word + " " + ":(";
    }
}






































