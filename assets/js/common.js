let pages = [
    { "name": "Accueil", "href": "index" },
    { "name": "Vidéo", "href": "video" },
    { "name": "Menu", "href": "menu" },
    { "name": "Activités", "href": "activites" },
    { "name": "Jeu", "href": "https://play.paulorado.fr" },
    { "name": "FAQ", "href": "faq" },

]


function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

function populateNavbar() {
    let navNode = document.getElementById("navList");
    pages.forEach(link => {
        navNode.innerHTML += `
        <li class="nav-item"><a class="nav-link" href="${link.href}">${link.name}</a></li>
        `
    });
}
