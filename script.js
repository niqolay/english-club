var currentWordIndex = 0;
var wasCorrect = false;
shuffleArray(verbs);  

function start() {
  showNextWord();
}

function showNextWord() {
    if (currentWordIndex !== 0) {
        addWordToResultTable(verbs[currentWordIndex]);
    }
    var currentWord = verbs[++currentWordIndex];
    document.getElementById("ru_word").innerHTML = currentWord.ru.join(', ');
}

function addWordToResultTable(word) {
    var table = document.getElementById("results");
    var newRow = table.insertRow(1);
    var ruCell = newRow.insertCell(0);
    ruCell.innerHTML = word.ru.join(', ');
    var enCell = newRow.insertCell(1);
    enCell.innerHTML = word.en;
    var correctnesCell = newRow.insertCell(2);
    correctnesCell.innerHTML = wasCorrect ? '+' : '';
}

function know() {
    wasCorrect = true;
    showNextWord();
}

function dontKnow() {
    wasCorrect = false;
    showNextWord();
}


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}