var innerHtml = function (arr, nodeElement) {
    var selectEl = document.createElement('select');

    for (var i = 0; i < arr.length; i++) {
        var opt = document.createElement('option');
        var textOption = document.createTextNode(arr[i]);
        opt.appendChild(textOption);

        selectEl.appendChild(opt);
    }

    nodeElement.appendChild(selectEl);
}

var div1 = document.querySelector('div');
var div2 = document.querySelector('div').nextElementSibling;

innerHtml(['sunce', 'biki', 'nole', 'bori'], div1);
innerHtml(['sunce', 'biki', 'nole', 'bori'], div2);


var isValidate = function () {
    var allInputs = document.querySelectorAll('input');
    for (var i = 0; i < allInputs.length; i++) {
        var reqValue = allInputs[i].getAttribute("required");
        if (reqValue == 'required') {
            if (allInputs[i].value == "") {
                allInputs[i].classList = "red-border";
            }
        }
    }
}

isValidate();