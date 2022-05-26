"use strict"

const textUnderTextarea = document.querySelector(".counter__text");
const textarea = document.querySelector(".counter__textarea");


textarea.addEventListener("blur", countWords);
textarea.addEventListener("focus", emptyText);

var counterWord;
function countWords() {
    var textValue = textarea.value.length;
    counterWord = 1;
    for (let i = 0; i < textValue - 1; i++) {
        if (textarea.value[i] === " ") {
            counterWord += 1;
        }
    }
    textUnderTextarea.innerHTML = `<p>В тексте ${counterWord} слов</p><p>В тексте ${textarea.value.length} символов</p>`;
}

function emptyText() {
    textUnderTextarea.innerHTML = '';
}