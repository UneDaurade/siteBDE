let cowboys = [
    {
        "name": "Lucas Hubert",
        "role": "Président",
        "pole": "Bureau",
        "desc": "Chef de liste",
    },
    {
        "name": "Elise Forçans",
        "role": "Vice-présidente",
        "pole": "Bureau",
        "desc": "",
    },
    {
        "name": "Samuel Bernat",
        "role": "Vice-président",
        "pole": "Bureau",
        "desc": "",
    },
    {
        "name": "Léo Mazeau",
        "role": "Trésorier",
        "pole": "Bureau",
        "desc": "",
    },
    {
        "name": "Thomas Poupon",
        "role": "Trésorier",
        "pole": "Bureau",
        "desc": "",
    },
    {
        "name": "Alexandru Moldovan",
        "role": "",
        "pole": "Pôle communication",
        "desc": "",
    },
    {
        "name": "Samuel Rodrigues",
        "role": "",
        "pole": "Pôle communication",
        "desc": "",
    },
    {
        "name": "Alexandre Legrand",
        "role": "",
        "pole": "Pôle communication",
        "desc": "",
    },
    {
        "name": "Quentin Bouillon",
        "role": "",
        "pole": "Pôle communication",
        "desc": "",
    },
    {
        "name": "Raphael Bisiaux",
        "role": "",
        "pole": "Pôle event",
        "desc": "",
    },
    {
        "name": "Ninon Jean-Pierre",
        "role": "",
        "pole": "Pôle event",
        "desc": "",
    },
    {
        "name": "Titouan Manach",
        "role": "",
        "pole": "Pôle event",
        "desc": "",
    },
    {
        "name": "Vincent Arnaudin",
        "role": "",
        "pole": "Pôle event",
        "desc": "",
    },
    {
        "name": "Timothey Larrouy",
        "role": "",
        "pole": "Pôle soirée",
        "desc": "",
    },
    {
        "name": "Julie Berrieix",
        "role": "",
        "pole": "Pôle soirée",
        "desc": "",
    },
    {
        "name": "Mathis Mazurier",
        "role": "",
        "pole": "Pôle soirée",
        "desc": "",
    },
    {
        "name": "Paul Baudean",
        "role": "",
        "pole": "Pôle soirée",
        "desc": "",
    },
    {
        "name": "Léo Peyroulet",
        "role": "",
        "pole": "Pôle sécurité",
        "desc": "",
    },
    {
        "name": "Bastien Duclos",
        "role": "",
        "pole": "Pôle sécurité",
        "desc": "",
    },
    {
        "name": "Victor Baucor",
        "role": "",
        "pole": "Pôle sécurité",
        "desc": "",
    },
    {
        "name": "Hugo Giraud",
        "role": "",
        "pole": "Pôle sécurité",
        "desc": "",
    },
];

function rewardCalculator(str) {

    // P and M
    let p = 4491;
    let m = (1e3 + 9);
    let power_of_p = 1;
    let hash_val = 0;

    // Loop to calculate the hash value
    // by iterating over the elements of String
    for (let i = 0; i < str.length; i++) {
        hash_val = (hash_val + (str[i].charCodeAt() -
            'a'.charCodeAt() + 1) * power_of_p) % m;
        power_of_p = (power_of_p * p) % m;
    }
    return hash_val;
}

function populateTeam() {
    let poles = [];
    cowboys.forEach(cowboy => {
        console.log(poles, poles.includes(cowboy.pole))
        let peoplesNode;
        if (!poles.includes(cowboy.pole)) {
            let poleId = "pole-" + (poles.length)
            poles.push(cowboy.pole);
            let poleNode;
            poleNode = document.createElement("section");
            poleNode.id = poleId;
            poleNode.classList.add("team-grid");

            let poleContainer = document.createElement("div");
            poleContainer.classList.add("container");
            {
                let poleIntro = document.createElement("div");
                poleIntro.classList.add("intro");
                poleIntro.innerHTML += `<p class="text-center headerz p-1">${cowboy.pole}</p>`;
                poleContainer.appendChild(poleIntro);
            }
            {
                peoplesNode = document.createElement("div");
                peoplesNode.classList.add("row");
                peoplesNode.classList.add("people");

                poleContainer.appendChild(peoplesNode);
            }
            poleNode.appendChild(poleContainer);
            document.getElementById("poles").appendChild(poleNode)
        } else {
            let poleId = "pole-" + poles.findIndex((el) => el == cowboy.pole);
            console.log("found :", poleId);
            let poleNode = document.getElementById(poleId);
            console.log(poleNode.innerHTML)
            peoplesNode = poleNode.getElementsByClassName("people")[0]
        }
        let cowboyNode = document.createElement("div");
        cowboyNode.className += "col-md-4 col-lg-3 item";
        cowboyNode.innerHTML += `
        <div class="box" style="background: url(&quot;assets/img/background.png&quot;);">
            <h3 class="wanted">WANTED</h3>
            <img class="pic-present mx-auto img-fluid" src=${(UrlExists(`assets/img/cowboys/${cowboy.name.replace(" ", "_")}.jpg`)) ? `assets/img/cowboys/${cowboy.name.replace(" ", "_")}.jpg` : "assets/img/logo.png"}>
            <div class="cover">
                <h3 class="name">${cowboy.name}</h3>
                ${(cowboy.role != "") ? `<p class="title">${cowboy.role}</p>` : ""}
                ${(cowboy.desc != "") ? `<p class="text-center description">${cowboy.desc}</p>` : ""}
            </div>
            <h3 class="wanted">\$${rewardCalculator(cowboy.name)}\nREWARD</h3>
        </div >
    `;
        peoplesNode.appendChild(cowboyNode);
    });
}


function onload() {
    populateTeam();
    populateNavbar();
}
