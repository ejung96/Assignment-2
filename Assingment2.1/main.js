"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter),
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = [ "0000000", "0000001", "0000010", "000011", "0000100", "0000101", "0000110", "0000111", "0001000", "0001001", "0001010", "0001011", "0001100", "0001101", "0001110", "0001111", "0010000", "0010001", "0010010", "0010011", "0010100", "0010101", "0010110", "0010111", "0011000", "011001", "011010", "011011", "011100", "011101", "011110", "011111", "0100000", "0100001", "0100010", "0100011", "0100100", "0100101", "0100110", "0100111", "0101000", "0101001", "0101010", "0101011", "0101100", "0101101", "0101110", "0101111", "0110000", "0110001", "0110010", "0110011", "0110100", "0110101", "0110110", "0110111", "0111000", "0111001", "0111010", "0111011", "0111100", "0111101", "0111110", "0111111", "1000000", "1000001", "1000011", "1000111", "1001111", "1011111", "1111111" ], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

window.onload = function() {
    stepSequence();
};
