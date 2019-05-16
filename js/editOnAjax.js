function edit() {
    var title = prompt('Введите заголовок комментария:', 'Comment title');
    var body = prompt('Введите описание комментария:', 'Year comment');
    var comId = prompt('Укажите ID комментария:', '1');
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
// window.location.reload(false);

// reload window
// var method = 'GET';
// var isAsync = true;
// var url = "https://5cbef81d06a6810014c66193.mockapi.io/api/comments";

// var current = '';
// var currentParse;
// setInterval(function () {
//     currentParse = new XMLHttpRequest();
//     currentParse.open(method, url, isAsync);
//     currentParse.send();
//     currentParse.onreadystatechange = function () {
//         if (currentParse.readyState == 4 && currentParse.status == 200) {
//             if (current !== currentParse.responseText) {
//                 console.log('1' + ' ' + currentParse.responseText);
//                 current = currentParse.responseText;
//                 console.log('2' + ' ' + current);

//                 location.reload();
//             }
//         }
//     };
// }, 1000);
