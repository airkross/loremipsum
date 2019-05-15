function inputID() {
    del(parseInt(prompt('Введите ID коментария:', '1')));
}

function del(id) {
    var url = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/' + id, true);
    xhr.send(null);
}