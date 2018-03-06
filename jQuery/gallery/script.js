$(function () {
    var imageGallery = ['images/sl1.png', 'images/sl2.jpg', 'images/sl3.png', 'images/sl4.png', 'images/sl5.jpg', 'images/sl6.jpg'];
    var div = $('<div class="img-wrapper"></div>');
    var title = $('<h2>Amazing Gallery</h2>');
    $('body').append(div);
    $(div).before(title);
    

    for (var i = 0; i < imageGallery.length; i++) {
        var img = $('<img src="' + imageGallery[i] + '"/>');
        $(div).append(img);

    }

    $('img').each(function (index, element) {
        $(element).css({
            'width': Math.random()*50+1 + '%', 
            'float': 'left'
        })
    })
});