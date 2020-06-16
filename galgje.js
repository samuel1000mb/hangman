var wordsArray = ["galgje", "Samuel", "vrachtwagenchauffeur"];


function Start() {
    var secretWord = ChooseWordFromListOfWords();

    console.log(secretWord);
}

function ChooseWordFromListOfWords() {
    var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return randomWord;
}