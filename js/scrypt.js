"use strict"

const textUnderTextarea = document.querySelector(".counter__text");
const textarea = document.querySelector(".counter__textarea");

const showWordsCheck = document.querySelector("input[name=show__words]");
const showSymbolsCheck = document.querySelector("input[name=show__symbols]");
const showSymbolsNotSpaceCheck = document.querySelector("input[name=show__symbolsnotspace]");
const showProcentagesCheck = document.querySelector("input[name=show__procentage]");

const textShowWords = document.querySelector(".text__words");
const textShowSymbols = document.querySelector(".text__symbols");
const textShowSymbolsNotSpace = document.querySelector(".text__symbolsnotspace");
const textShowProcentage = document.querySelector(".text__procentage");

textarea.addEventListener("blur", countWords);
textarea.addEventListener("focus", emptyText);

showWordsCheck.addEventListener('change', function () {
    if (this.checked) {
        textShowWords.classList.add('enabled');
    } else {
        textShowWords.classList.remove('enabled');
    }
});
showSymbolsCheck.addEventListener('change', function () {
    if (this.checked) {
        textShowSymbols.classList.add('enabled');
    } else {
        textShowSymbols.classList.remove('enabled');
    }
});
showSymbolsNotSpaceCheck.addEventListener('change', function () {
    if (this.checked) {
        textShowSymbolsNotSpace.classList.add('enabled');
    } else {
        textShowSymbolsNotSpace.classList.remove('enabled');
    }
});
showProcentagesCheck.addEventListener('change', function () {
    if (this.checked) {
        textShowProcentage.classList.add('enabled');
    } else {
        textShowProcentage.classList.remove('enabled');
    }
});




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
    textShowWords.innerHTML = `<p>В тексте ${counterWord} слов</p>`;
    textShowSymbols.innerHTML = `<p>В тексте ${textValue} символов</p>`;
    textShowSymbolsNotSpace.innerHTML = `<p>В тексте ${counterSymbol} символов без пробелов</p>`;
    textShowProcentage.innerHTML = ` <p>В тексте ${procentSymbol} % символов</p>
    <p>В тексте ${100 - procentSymbol} % пробелов</p>`;

}
function emptyText() {
    textShowWords.innerHTML = '';
    textShowSymbols.innerHTML = '';
    textShowSymbolsNotSpace.innerHTML = '';
    textShowProcentage.innerHTML = '';
}
textarea.addEventListener("keydown", function (key) {
    if (key.code == 'Space' && textarea.value[textarea.value.length - 1] == ' ') {
        key.preventDefault();
    } else if (key.code == 'Enter') {
        key.preventDefault();
    }
});
