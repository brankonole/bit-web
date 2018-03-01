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

        // cancelAnimationFrame(movingBgd);
        // movingBgd = window.requestAnimationFrame(step);

        // if (running == false) {
            clearInterval(movingBgd);
            movingBgd = setInterval(function () {
                console.log('jkbjb');
                
                reducePositionX();
            }, 15);
        //     running = true;
        // }
    }
});

var start = null;

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    console.log(progress);
    
    container.style.backgroundPositionX = - progress / 2 + 'px';

    movingBgd = window.requestAnimationFrame(step);
  }

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 39) {
        marioGif.classList.remove('active');
        marioImg.classList.add('active');

        // cancelAnimationFrame(movingBgd);

        clearInterval(movingBgd);
        // running = false;
    }
});