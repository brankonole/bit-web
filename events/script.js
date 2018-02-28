var body = document.querySelector('body');

// function showMessage() {
//     alert('Zdravo!');
// }

function changeBackground() {
    body.classList.toggle('night');
}

var ourTurnOn;

function turnOn() {
    var btn = document.querySelector('.btn-automatic');

    if (btn.getAttribute('value') === 'Turn off') {
        clearInterval(ourTurnOn);
        btn.setAttribute('value', 'Turn on');
    } else {
        ourTurnOn = setInterval(function () {
            changeBackground();
        }, 1000);
        btn.setAttribute('value', 'Turn off');
    }
}