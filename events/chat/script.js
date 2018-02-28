var input = document.querySelector('#inputText');
var container = document.querySelector('#container');

var appendText = function() {
    var inputVal = input.value;
    var par = document.createElement('p');
    var parText = document.createTextNode(inputVal);
    par.appendChild(parText);
    container.appendChild(par);
    input.value = "";
} 

document.querySelector('#btn').onclick = function() {
    if (input.value !== "") {
        appendText();
    }                  
};

document.querySelector('#inputText').onkeyup = function(event) {
    if (event.keyCode == 13) {
        if (input.value !== "") {
            appendText();
        }
    }
};