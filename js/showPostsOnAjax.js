
function addCard(title, body, flagColumn) {

    var cardsLeft = document.querySelector('.cards-left');
    var cardsRight = document.querySelector('.cards-right');
    var card = document.createElement('div');
    var a = document.createElement('a');
    var p = document.createElement('p');
    var btn = document.createElement('a');

    card.classList.add('card');
    a.classList.add('comment-card-title');
    p.classList.add('comment-card-discr');
    btn.classList.add('comment-btn');

    a.setAttribute('href', 'comment.html');
    btn.setAttribute('href', 'comment.html');

    btn.textContent = 'Read more';
    a.textContent = title;
    p.textContent = body;

    card.appendChild(a);
    card.appendChild(p);
    card.appendChild(btn);
    if (flagColumn) {
        cardsLeft.appendChild(card);
    } else {
        cardsRight.appendChild(card);
    }
}

var method = 'GET';
var isAsync = true;

window.onload = function () {
    ajaxGet('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', function (data) {
        var json = JSON.parse(data);

        for (var i = 0; i < json.length; i++) {
            if (i == 0 || i % 2 == 0) {
                addCard(json[i].title, json[i].body, true);
            } else {
                addCard(json[i].title, json[i].body, false);
            }

        }
    });
};


function ajaxGet(url, callback) {
    var foo = callback || function (data) { };

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            foo(request.responseText);
        }
    };

    request.open(method, url, isAsync);
    request.send();
}
