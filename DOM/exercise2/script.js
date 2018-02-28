
// var whatever = function () {
//     var a = document.querySelector("div .selected");  
//     a.className = "";


// }

// console.log(a);


// whatever();


var access = function () {
    var lii = document.querySelector("li").textContent;

    alert(lii);
}

access();

var access = function () {
    var li = document.querySelector("li").textContent;
    var lastLi = document.querySelector("ul").lastElementChild;

    lastLi.textContent = 'Nole';

    alert(li);
}

access();

