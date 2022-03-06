let faq = [
    {
        "q": "Quels sont vos projets pour l’année prochaine, en tant que BDE?",
        "a": "D’une part nous voulons maintenir ce qui se fait déjà, c’est à dire maintenir les évènements et les soirées qui ont eu lieu les années précédentes, mais aussi remettre en place les évènements qui n’ont pas pu être réalisés ces deux dernières années. D’autre part, nous voulons renforcer la vie étudiante de l’école en proposant une soirée dans le même style que la Back To School tous les 1 ou 2 mois. Nous aimerions également innover et proposer des nouveaux types d'événements."
    },
    {
        "q": "Est-ce que cela demande beaucoup de travail de lister ? ",
        "a": "Pour nous ce fût un travail tout au long de l’année mais le rythme s’est intensifié sur le mois de février afin que tout soit prêt pour le lancement de la campagne. Il a fallu récolter des fonds afin de financer la semaine de liste, organiser la soirée, les activités, créer un site internet, une vidéo, … Tout cela prend du temps mais nous avons avons charbonné sur tous les fronts afin que vous puissiez profiter de tout ça durant une semaine de qualité."
    },
    {
        "q": "Si c’était à refaire, est ce que vous vous relanceriez dans ce projet ?",
        "a": "Pour tous les membres de la liste c’est un oui sans hésitation."
    },
    {
        "q": "Quelle a été la partie la plus intéressante à faire ? ",
        "a": "Probablement l’organisation de la soirée car c’est ce qui nous concernait le plus et c’est la partie qu’on ne veut absolument pas rater."
    },
    {
        "q": "Quelles activités nous avez-vous concocter pour cette semaine de liste ?",
        "a": "On vous a préparé du lourd, soyez attentifs et suivez nous sur les réseaux sociaux pour ne rien louper. On peut vous dire qu’il y aura une chasse aux trésors avec une jolie récompense à la clé mais pas seulement."
    },
    {
        "q": "Comment s’annonce votre soirée ?",
        "a": "A priori elle s’annonce bien, on va tout faire pour qu’elle reste dans les mémoires. On ne vous en dit pas plus, RDV jeudi !"
    },
    {
        "q": "Pensez-vous avoir une chance de gagner ?",
        "a": "La concurrence est rude mais nous avons toutes nos chances. Que le meilleur gagne !! (votez Paulorado !)"
    }
]

function populateFaq() {
    let faqNode = document.getElementById("faq")
    faq.forEach(q => {
        faqNode.innerHTML += `
        <div>
            <p class="subheaderz" style="margin-top: 5%;"><b>${q.q}</b></p>
            <p class="blabla text-justify p-2"><span class="h3">- </span>${q.a}</p>
        </div>
        `
    });
}

function onload() {
    populateFaq();
    populateNavbar();
}
