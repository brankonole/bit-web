var container = document.querySelector('.container');
var marioImg = document.querySelector('.mario-img');
var marioGif = document.querySelector('.mario-gif');
var movingBgd;
var running = false;
var i = 0;

function reducePositionX() {
    i += -10;
    container.style.backgroundPositionX = i + 'px';
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 39) {
        marioGif.classList.add('active');
        marioImg.classList.remove('active');

        if (running == false) {
            movingBgd = setInterval(function () {
                reducePositionX();
            }, 10);
            running = true;
        }
    }
});

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 39) {
        marioGif.classList.remove('active');
        marioImg.classList.add('active');

        clearInterval(movingBgd);
        running = false;
    }
});