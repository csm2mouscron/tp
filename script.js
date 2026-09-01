const verbs = [
    {"num": 1, "inf": "bakken", "ovt": "bakte(n)", "vd": "gebakken", "tr": "cuire"},
    {"num": 2, "inf": "barsten", "ovt": "barstte(n)", "vd": "is gebarsten", "tr": "éclater, crever"},
    {"num": 3, "inf": "beginnen", "ovt": "begon(nen)", "vd": "is begonnen", "tr": "commencer"},
    {"num": 4, "inf": "begrijpen", "ovt": "begreep - begrepen", "vd": "begrepen", "tr": "comprendre"},
    {"num": 5, "inf": "bergen", "ovt": "borg(en)", "vd": "geborgen", "tr": "ranger, abriter"},
    {"num": 6, "inf": "beschrijven", "ovt": "beschreef - beschreven", "vd": "beschreven", "tr": "décrire"},
    {"num": 7, "inf": "besluiten", "ovt": "besloot - besloten", "vd": "besloten", "tr": "décider"},
    {"num": 8, "inf": "bezoeken", "ovt": "bezocht(en)", "vd": "bezocht", "tr": "visiter"},
    {"num": 9, "inf": "bieden", "ovt": "bood - boden", "vd": "geboden", "tr": "offrir"},
    {"num": 10, "inf": "bijten", "ovt": "beet - beten", "vd": "gebeten", "tr": "mordre"},
    {"num": 11, "inf": "blijken", "ovt": "bleek - bleken", "vd": "is gebleken", "tr": "s'avérer"},
    {"num": 12, "inf": "blijven", "ovt": "bleef - bleven", "vd": "is gebleven", "tr": "rester"},
    {"num": 13, "inf": "blinken", "ovt": "blonk(en)", "vd": "geblonken", "tr": "briller"},
    {"num": 14, "inf": "breken", "ovt": "brak(en)", "vd": "gebroken", "tr": "casser"},
    {"num": 15, "inf": "brengen", "ovt": "bracht(en)", "vd": "gebracht", "tr": "apporter"},
    {"num": 16, "inf": "denken", "ovt": "dacht(en)", "vd": "gedacht", "tr": "penser"},
    {"num": 17, "inf": "doen", "ovt": "deed - deden", "vd": "gedaan", "tr": "faire"},
    {"num": 18, "inf": "dragen", "ovt": "droeg(en)", "vd": "gedragen", "tr": "porter"},
    {"num": 19, "inf": "drinken", "ovt": "dronk(en)", "vd": "gedronken", "tr": "boire"},
    {"num": 20, "inf": "dwingen", "ovt": "dwong(en)", "vd": "gedwongen", "tr": "forcer"},
    {"num": 21, "inf": "ervaren", "ovt": "ervoer(en)", "vd": "ervaren", "tr": "éprouver"},
    {"num": 22, "inf": "eten", "ovt": "at(en)", "vd": "gegeten", "tr": "manger"},
    {"num": 23, "inf": "gaan", "ovt": "ging(en)", "vd": "is gegaan", "tr": "aller"},
    {"num": 24, "inf": "genezen", "ovt": "genas - genazen", "vd": "genezen", "tr": "guérir"},
    {"num": 25, "inf": "genieten van", "ovt": "genoot - genoten", "vd": "genoten", "tr": "profiter de"},
    {"num": 26, "inf": "geven", "ovt": "gaf - gaven", "vd": "gegeven", "tr": "donner"},
    {"num": 27, "inf": "gieten", "ovt": "goot - goten", "vd": "gegoten", "tr": "verser"},
    {"num": 28, "inf": "hangen", "ovt": "hing(en)", "vd": "gehangen", "tr": "pendre"},
    {"num": 29, "inf": "hebben", "ovt": "had(den)", "vd": "gehad", "tr": "avoir"},
    {"num": 30, "inf": "helpen", "ovt": "hielp(en)", "vd": "geholpen", "tr": "aider"},
    {"num": 31, "inf": "houden (van)", "ovt": "hield(en)", "vd": "gehouden", "tr": "garder / aimer"},
    {"num": 32, "inf": "kiezen", "ovt": "koos - kozen", "vd": "gekozen", "tr": "choisir"},
    {"num": 33, "inf": "kijken", "ovt": "keek - keken", "vd": "gekeken", "tr": "regarder"},
    {"num": 34, "inf": "klimmen", "ovt": "klom(men)", "vd": "(is) geklommen", "tr": "grimper"},
    {"num": 35, "inf": "komen", "ovt": "kwam(en)", "vd": "is gekomen", "tr": "venir"},
    {"num": 36, "inf": "kopen", "ovt": "kocht(en)", "vd": "gekocht", "tr": "acheter"},
    {"num": 37, "inf": "krijgen", "ovt": "kreeg - kregen", "vd": "gekregen", "tr": "recevoir"},
    {"num": 38, "inf": "kunnen", "ovt": "kon(den)", "vd": "gekund", "tr": "pouvoir"},
    {"num": 39, "inf": "lachen", "ovt": "lachte(n)", "vd": "gelachen", "tr": "rire"},
    {"num": 40, "inf": "laten", "ovt": "liet(en)", "vd": "gelaten", "tr": "laisser"},
    {"num": 41, "inf": "lezen", "ovt": "las - lazen", "vd": "gelezen", "tr": "lire"},
    {"num": 42, "inf": "liegen", "ovt": "loog - logen", "vd": "gelogen", "tr": "mentir"},
    {"num": 43, "inf": "liggen", "ovt": "lag(en)", "vd": "(is) gelegen", "tr": "être couché"},
    {"num": 44, "inf": "lijken op", "ovt": "leek - leken", "vd": "geleken", "tr": "ressembler à"},
    {"num": 45, "inf": "lopen", "ovt": "liep(en)", "vd": "(is) gelopen", "tr": "courir"},
    {"num": 46, "inf": "moeten", "ovt": "moest(en)", "vd": "gemoeten", "tr": "devoir"},
    {"num": 47, "inf": "mogen", "ovt": "mocht(en)", "vd": "gemogen", "tr": "pouvoir (permission)"},
    {"num": 48, "inf": "nemen", "ovt": "nam(en)", "vd": "genomen", "tr": "prendre"},
    {"num": 49, "inf": "ontvangen", "ovt": "ontving(en)", "vd": "ontvangen", "tr": "recevoir"},
    {"num": 50, "inf": "overdrijven", "ovt": "overdreef - overdreven", "vd": "overdreven", "tr": "exagérer"},
    {"num": 51, "inf": "overlijden", "ovt": "overleed - overleden", "vd": "is overleden", "tr": "décéder"},
    {"num": 52, "inf": "rijden", "ovt": "reed - reden", "vd": "(is) gereden", "tr": "rouler"},
    {"num": 53, "inf": "roepen", "ovt": "riep(en)", "vd": "geroepen", "tr": "crier"},
    {"num": 54, "inf": "scheiden", "ovt": "scheidde(n)", "vd": "(is) gescheiden", "tr": "séparer"},
    {"num": 55, "inf": "schijnen", "ovt": "scheen - schenen", "vd": "geschenen", "tr": "briller / sembler"},
    {"num": 56, "inf": "schrijven", "ovt": "schreef - schreven", "vd": "geschreven", "tr": "écrire"},
    {"num": 57, "inf": "slapen", "ovt": "sliep(en)", "vd": "geslapen", "tr": "dormir"},
    {"num": 58, "inf": "sluiten", "ovt": "sloot - sloten", "vd": "gesloten", "tr": "fermer"},
    {"num": 59, "inf": "snijden", "ovt": "sneed - sneden", "vd": "gesneden", "tr": "couper"},
    {"num": 60, "inf": "spreken", "ovt": "sprak(en)", "vd": "gesproken", "tr": "parler"},
    {"num": 61, "inf": "springen", "ovt": "sprong(en)", "vd": "(is) gesprongen", "tr": "sauter"},
    {"num": 62, "inf": "staan", "ovt": "stond(en)", "vd": "gestaan", "tr": "être debout"},
    {"num": 63, "inf": "stelen", "ovt": "stal(en)", "vd": "gestolen", "tr": "voler"},
    {"num": 64, "inf": "sterven", "ovt": "stierf - stierven", "vd": "is gestorven", "tr": "mourir"},
    {"num": 65, "inf": "stijgen", "ovt": "steeg - stegen", "vd": "is gestegen", "tr": "augmenter"},
    {"num": 66, "inf": "strijken", "ovt": "streek - streken", "vd": "gestreken", "tr": "repasser"},
    {"num": 67, "inf": "treden", "ovt": "trad(en)", "vd": "getreden", "tr": "marcher"},
    {"num": 68, "inf": "trekken", "ovt": "trok(ken)", "vd": "getrokken", "tr": "tirer"},
    {"num": 69, "inf": "uitsluiten", "ovt": "sloot uit", "vd": "uitgesloten", "tr": "exclure"},
    {"num": 70, "inf": "vallen", "ovt": "viel(en)", "vd": "is gevallen", "tr": "tomber"},
    {"num": 71, "inf": "vangen", "ovt": "ving(en)", "vd": "gevangen", "tr": "attraper"},
    {"num": 72, "inf": "verbieden", "ovt": "verbood", "vd": "verboden", "tr": "interdire"},
    {"num": 73, "inf": "verdwijnen", "ovt": "verdween", "vd": "is verdwenen", "tr": "disparaître"},
    {"num": 74, "inf": "vergelijken", "ovt": "vergeleek", "vd": "vergeleken", "tr": "comparer"},
    {"num": 75, "inf": "vergeten", "ovt": "vergat(en)", "vd": "(is) vergeten", "tr": "oublier"},
    {"num": 76, "inf": "verkopen", "ovt": "verkocht(en)", "vd": "verkocht", "tr": "vendre"},
    {"num": 77, "inf": "verlaten", "ovt": "verliet(en)", "vd": "verlaten", "tr": "quitter"},
    {"num": 78, "inf": "verliezen", "ovt": "verloor", "vd": "(is) verloren", "tr": "perdre"},
    {"num": 79, "inf": "vermijden", "ovt": "vermeed", "vd": "vermeden", "tr": "éviter"},
    {"num": 80, "inf": "vermogen", "ovt": "vermocht(en)", "vd": "vermocht", "tr": "pouvoir"},
    {"num": 81, "inf": "verstaan", "ovt": "verstond(en)", "vd": "verstaan", "tr": "comprendre"},
    {"num": 82, "inf": "vertrekken", "ovt": "vertrok(ken)", "vd": "is vertrokken", "tr": "partir"},
    {"num": 83, "inf": "vinden", "ovt": "vond(en)", "vd": "gevonden", "tr": "trouver"},
    {"num": 84, "inf": "vragen", "ovt": "vroeg(en)", "vd": "gevraagd", "tr": "demander"},
    {"num": 85, "inf": "wassen", "ovt": "waste(n)", "vd": "gewassen", "tr": "laver"},
    {"num": 86, "inf": "wegen", "ovt": "woog - wogen", "vd": "gewogen", "tr": "peser"},
    {"num": 87, "inf": "weten", "ovt": "wist(en)", "vd": "geweten", "tr": "savoir"},
    {"num": 88, "inf": "wijzen", "ovt": "wees - wezen", "vd": "gewezen", "tr": "montrer"},
    {"num": 89, "inf": "willen", "ovt": "wilde(n) / wou(den)", "vd": "gewild", "tr": "vouloir"},
    {"num": 90, "inf": "winnen", "ovt": "won(nen)", "vd": "gewonnen", "tr": "gagner"},
    {"num": 91, "inf": "worden", "ovt": "werd(en)", "vd": "is geworden", "tr": "devenir"},
    {"num": 92, "inf": "zeggen", "ovt": "zei(den)", "vd": "gezegd", "tr": "dire"},
    {"num": 93, "inf": "zenden", "ovt": "zond(en)", "vd": "gezonden", "tr": "envoyer"},
    {"num": 94, "inf": "zien", "ovt": "zag(en)", "vd": "gezien", "tr": "voir"},
    {"num": 95, "inf": "zijn", "ovt": "was - waren", "vd": "geweest", "tr": "être"},
    {"num": 96, "inf": "zingen", "ovt": "zong(en)", "vd": "gezongen", "tr": "chanter"},
    {"num": 97, "inf": "zitten", "ovt": "zat(en)", "vd": "gezeten", "tr": "être assis"},
    {"num": 98, "inf": "zoeken", "ovt": "zocht(en)", "vd": "gezocht", "tr": "chercher"},
    {"num": 99, "inf": "zwemmen", "ovt": "zwom(men)", "vd": "(is) gezwommen", "tr": "nager"}
];

let currentList = [...verbs];
let index = 0;
let isFlipped = false;

const cardElement = document.getElementById('card');

function render() {
    if (currentList.length === 0) {
        document.getElementById('frontTitle').innerText = "Aucun verbe";
        document.getElementById('frontSub').innerText = "";
        document.getElementById('counter').innerText = "0 / 0";
        return;
    }

    const v = currentList[index];
    
    // Front content
    document.getElementById('frontTag').innerText = `Verbe N° ${v.num || (index + 1)} / 99`;
    document.getElementById('frontTitle').innerText = v.inf;
    document.getElementById('frontSub').innerText = v.tr;

    // Back content
    document.getElementById('backInf').innerText = v.inf;
    document.getElementById('backOvt').innerText = v.ovt;
    document.getElementById('backVd').innerText = v.vd;
    document.getElementById('backTr').innerText = v.tr;

    document.getElementById('counter').innerText = `Carte ${index + 1} / ${currentList.length}`;
}

function flipCard() {
    isFlipped = !isFlipped;
    cardElement.classList.toggle('flipped', isFlipped);
}

function resetFlip() {
    isFlipped = false;
    cardElement.classList.remove('flipped');
}

// Interractions
document.getElementById('cardContainer').onclick = flipCard;

document.getElementById('nextBtn').onclick = () => {
    if (!currentList.length) return;
    resetFlip();
    index = (index + 1) % currentList.length;
    render();
};

document.getElementById('prevBtn').onclick = () => {
    if (!currentList.length) return;
    resetFlip();
    index = (index - 1 + currentList.length) % currentList.length;
    render();
};

document.getElementById('shuffleBtn').onclick = () => {
    resetFlip();
    currentList.sort(() => Math.random() - 0.5);
    index = 0;
    render();
};

document.getElementById('search').oninput = (e) => {
    const q = e.target.value.toLowerCase().trim();
    currentList = verbs.filter(v => 
        v.inf.toLowerCase().includes(q) || 
        v.tr.toLowerCase().includes(q) ||
        v.ovt.toLowerCase().includes(q) ||
        v.vd.toLowerCase().includes(q)
    );
    index = 0;
    resetFlip();
    render();
};

// Keyboards shortcuts
document.onkeydown = (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') document.getElementById('nextBtn').click();
    if (e.key === 'ArrowLeft') document.getElementById('prevBtn').click();
    if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') { 
        e.preventDefault(); 
        flipCard(); 
    }
};

render();
     
