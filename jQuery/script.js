$(function () {
    // $('li').hide();
    $('li:first').addClass('border-bottom');
    $('ul').addClass('to-upper-case');
    $('li.active').css('color', 'purple');

    var allLi = $('li').length;
    var middleLi = (allLi-1)/2;
    
    $('li:eq('+ middleLi +')').css('background-color', 'green');
});