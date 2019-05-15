function edit() {
    var title = prompt('Введите заголовок коментария:', 'Comment title');
    var body = prompt('Введите описание коментария:', 'Year comment');
    var comId = prompt('Укажите ID коментария:', '1');
    editComment(title, body, parseInt(comId));
}

function editComment(title, body, id) {
    var url = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";

    var data = {};
    data.title = title;
    data.body = body;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url + '/' + id, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}