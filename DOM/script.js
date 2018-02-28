var a = function() {
    var node = document.getElementsByClassName("second")[0];
    node.className = "first";


};



var changeLi = function() {
    var li = document.getElementsByTagName('li');
    var i = 0;
    while (i < li.length) {
        li[i].className = "third";
        i++;
    }
}



var d = function() {
    var lastUl = document.getElementsByTagName('ul');
    var b = lastUl[lastUl.length-1].getElementsByTagName("li");
    var i = 0;
    while (i < b.length) {
        b[i].className = "fourth";
        i++;
    }

}

var traverse = function () {
    var activeLi = document.getElementsByClassName("active")[0].parentNode.parentNode.previousElementSibling.getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
    activeLi.className = "active";

}

traverse();

