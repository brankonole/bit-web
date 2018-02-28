var body = document.querySelector('body');
var container = document.querySelector('.container');
var player = document.querySelector('.player');
var btn = document.querySelector('.btn');

function movePlayer(event) {
    var ourX = event.clientX;
    var ourY = event.clientY;

    player.style.top = ourY + 'px';
    player.style.left = ourX + 'px';
    console.log(event.clientX, event.clientY);
}
  
document.querySelector('.field').addEventListener('click', movePlayer);

document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.field').removeEventListener('click', movePlayer);
});