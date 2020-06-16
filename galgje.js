var wordsArray = ["galg", "Samuel", "vrachtwagenchauffeur"];


function Start() {
    var secretWord = ChooseWordFromListOfWords();
    
    ShowWordAsSeriesOfQuestionmarks(secretWord);
    ShowErrorIcons(6);
    ShowLettersAsButtons();
}

function ChooseWordFromListOfWords() {
    var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return randomWord;
}

function ShowWordAsSeriesOfQuestionmarks(word) {
    var questionmarkSection = document.getElementById("questionmarks");

    for (var i = 0; i < word.length; ++i) {
        questionmarkSection.innerHTML += "?";
    }
}

function ShowErrorIcons(howManyIcons) {
    var errorIconsSection = document.getElementById("errorIcons");
    
    for (var i = 0; i < howManyIcons; ++i) {
        errorIconsSection.innerHTML += '<span class="material-icons">highlight_off</span>';
    }
}

function ShowLettersAsButtons() {
    var alphabetSection = document.getElementById("alphabet");

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (var i = 0; i < alphabet.length; ++i) {
        var letter = alphabet[i];
        alphabetSection.innerHTML += '<button class="letterButton" onclick="ChooseLetter(this)">' + letter + '</button>';
    }
}

function ChooseLetter(element) {
    element.disabled = true;

}