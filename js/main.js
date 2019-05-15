var nav = document.getElementById('menu');
var navBtn = document.getElementById('navBtn');

navBtn.onclick = function () {
    if (nav.className.match('header-menu')) {
        nav.className = 'active-menu';
    }
    else {
        nav.className = 'header-menu';
    }
};

