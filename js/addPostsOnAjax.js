// отправка данных формы
var method = 'POST';
var isAsync = true;
function parseForm(title, body) {

    var date = Date.parse(new Date());

    var obj = {
        id: 30,
        created_at: date,
        title: title,
        body: body
    };
    var json = JSON.stringify(obj);

    ajaxSend('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', json);
}

function ajaxSend(url, jsonPost) {

    var request = new XMLHttpRequest();

    request.open(method, url, isAsync);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonPost);
    hideForm();
}

function hideForm() {
    var form = document.querySelector('.feedback-form');
    var thx = document.querySelector('.thx');
    
    form.style.display = 'none';
    thx.style.display = 'block';
}
