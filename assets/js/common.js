let pages = [
    { "name": "Accueil", "href": "index.html" },
    { "name": "Menu", "href": "menu.html" },
    { "name": "Activités", "href": "activites.html" },
    { "name": "Soirée", "href": "soiree.html" },
    { "name": "Jeu", "href": "https://play.paulorado.fr" },
    { "name": "FAQ", "href": "faq.html" },

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
