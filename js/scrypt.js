"use strict"

const textUnderTextarea = document.querySelector(".counter__text");
const textarea = document.querySelector(".counter__textarea");

textarea.addEventListener("blur", countWords);
textarea.addEventListener("focus", emptyText);

var counterWord;
var counterSymbol;
function countWords() {
    var textValue = textarea.value.length;
    counterWord = 1;
    counterSymbol = 0;
    for (let i = 0; i < textValue - 1; i++) {
        if (textarea.value[i] === " ") {
            counterWord += 1;
        }
    }
    for (let i = 0; i < textValue; i++) {
        if (textarea.value[i] !== " ") {
            counterSymbol++;
        }
    }
    var procentSymbol = ((counterSymbol / textValue) * 100).toFixed(2);
    textUnderTextarea.innerHTML = `<p>В тексте ${counterWord} слов</p><p>В тексте ${textValue} символов</p>
    <p>В тексте ${counterSymbol} символов без пробелов</p>
    <p>В тексте ${procentSymbol} % символов</p>
    <p>В тексте ${100 - procentSymbol} % пробелов</p>`;
}
function emptyText() {
    textUnderTextarea.innerHTML = '';
}
textarea.addEventListener("keydown", function (key) {
    if (key.code == 'Space' && textarea.value[textarea.value.length - 1] == ' ') {
        key.preventDefault();
    } else if (key.code == 'Enter') {
        key.preventDefault();
    }
});
