const templateInit = [
    `I've been really into PAIRING lately`,
    `I just saw a surprisingly compelling fanfic about PAIRING`,
    `In defiance of god and logic, they're shipping PAIRING`,
    `Hear me out, what about PAIRING`,
    `As far as rarepairs go, you could do worse than PAIRING`,
    `If it isn't about PAIRING then I don't care`,
    `Who the fuck is shipping PAIRING`,
    `Did you hear? The author said they support PAIRING`,
    `In my brave new headcanon, PAIRING is the main pairing`,
    `The fandom has latched onto PAIRING like a lifegiving teat`,
    `New crackship just dropped: PAIRING`,
    `PAIRING isn't just a ship, it's a whole fleet`,
    `I'm telling you, PAIRING is going to be canon`,
    `Say what you will about PAIRING shippers, they make fun animatics`,
    `I just had the weirdest dream about PAIRING`,
    `Oh no. Am I a fucking PAIRING shipper?`,
    `I just want what PAIRING have`,
    `Shut it down, they've started shipping PAIRING`,
    `I haven't considered PAIRING but I guess I see it`,
    `Don't talk to me until I've had my PAIRING`,
    `Welcome to my PAIRING fanblog`,
    `If you support PAIRING then get out of my house`,
    `It's a very PAIRING kind of day`
]

const nameInit = [
    "Ai",
    "Akari",
    "Aku",
    "Alteza",
    "Ananya",
    "Aoi",
    "Aphinya",
    "Aruko",
    "Awatsu",
    "Ayame",
    "Boakonsu",
    "Bronwyn",
    "Bunbuku",
    "Buzo",
    "Buzushi",
    "Cheri",
    "Daichi",
    "Daki",
    "Dakuyumoa",
    "Dobutsu",
    "Eisen",
    "Eko",
    "Emi",
    "Etsuko",
    "Faye",
    "Fred",
    "Fumei",
    "Gaku",
    "Gin",
    "Guriji",
    "Hachinosu",
    "Hadashi",
    "Hainoto",
    "Hakko",
    "Hansuke",
    "Haruka",
    "Hazumu",
    "Hidari",
    "Hoko",
    "Houka",
    "Huan",
    "Hyurun",
    "Ian",
    "Ikioi",
    "Ikue",
    "Itonui",
    "Izuna",
    "Jakku",
    "Jingo",
    "Joichi",
    "Joshou",
    "Juhyo",
    "Kai",
    "Kaimi",
    "Kaleo",
    "Kaori",
    "Karin",
    "Kasa",
    "Katari",
    "Kayo",
    "Kei",
    "Keiichi",
    "Keito",
    "Kelbie",
    "Ken",
    "Kenzo",
    "Ketto",
    "Kiku",
    "Kireude",
    "Kizuku",
    "Komichi",
    "Kouki",
    "Kugi",
    "Kumi",
    "Kurikaeshi",
    "Kyonin",
    "Kyuu",
    "Machi",
    "Mayu",
    "Medaka",
    "Migi",
    "Mitsuki",
    "Mitsuo",
    "Miyoko",
    "Mizuto",
    "Mono",
    "Motamausu",
    "Niji",
    "Niko",
    "Niten",
    "Pacchi",
    "Peace",
    "Pencilhead",
    "Phanta",
    "Ran",
    "Rekka",
    "Retai",
    "Ringo",
    "Ro",
    "Roroko",
    "Ryoshi",
    "Ryota",
    "Ryu",
    "Ryuuzaki",
    "Sadao",
    "Shinichi",
    "Sora",
    "Sosei",
    "Suzu",
    "Taeru",
    "Taiko",
    "Tami",
    "Tao",
    "Teshina",
    "Tomie",
    "Tomo",
    "Uchigawa",
    "Udeo",
    "Umeko",
    "Yami",
    "Yasui",
    "Yatsuki",
    "Yua",
    "Yuhodo"
]

const wildnameInit = [
    "a Klone",
    "a particularly attractive rat",
    "Akiraka",
    "an Eko familiar",
    "Kelbie's dogs",
    "Maid Fuuko",
    "Nagi",
    "Princess Raterina",
    "Sachiko",
    "the Jug"
]

var templates;
var names;
var wildNames;

var wildcard = 1;

function start() {
    templates = templateInit;
    names = nameInit;
    wildNames = wildnameInit;

    delete templateInit;
    delete nameInit;
    delete wildnameInit;

    generate();
}

function generate() {
    if (Math.random() * 100 < document.getElementById("slider").value) {
        var name1 = randomItem(wildNames);
    } else {
        var name1 = randomItem(names);
    }

    if (Math.random() * 100 < document.getElementById("slider").value) {
        var name2 = randomItem(wildNames);
    } else {
        var name2 = randomItem(names);
    }

    let template = randomItem(templates, false).replace("PAIRING", `<dd class="pair">${name1} × ${name2}</dd>`);

    document.getElementById("output").innerHTML = template;
}

function randomItem(list, remove) {
    var index = ~~(Math.random() * list.length);
    var item = list[index];

    return item;
}

function chanceUpdate() {
    wildcard = document.getElementById("slider").value;
    document.getElementById("wildcard").innerHTML = "Wildcard Chance: " + wildcard + "%";
}
