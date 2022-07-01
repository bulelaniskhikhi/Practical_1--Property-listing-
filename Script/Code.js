// sparkels
var colour = "#ff8fa0";
var sparkles = 120;

var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
    if (document.getElementById) {
        var i, rats, rlef, rdow;
        for (var i = 0; i < sparkles; i++) {
            var rats = createDiv(3, 3);
            rats.style.visibility = "hidden";
            document.body.appendChild(tiny[i] = rats);
            starv[i] = 0;
            tinyv[i] = 0;
            var rats = createDiv(5, 5);
            rats.style.backgroundColor = "transparent";
            rats.style.visibility = "hidden";
            var rlef = createDiv(1, 5);
            var rdow = createDiv(5, 1);
            rats.appendChild(rlef);
            rats.appendChild(rdow);
            rlef.style.top = "2px";
            rlef.style.left = "0px";
            rdow.style.top = "0px";
            rdow.style.left = "2px";
            document.body.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
    }
}

function sparkle() {
    var c;
    if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++)
            if (!starv[c]) {
                star[c].style.left = (starx[c] = x) + "px";
                star[c].style.top = (stary[c] = y) + "px";
                star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                star[c].style.visibility = "visible";
                starv[c] = 50;
                break;
            }
    }
    for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout("sparkle()", 40);
}

function update_star(i) {
    if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown) {
            star[i].style.top = stary[i] + "px";
            starx[i] += (i % 5 - 2) / 5;
            star[i].style.left = starx[i] + "px";
        } else {
            star[i].style.visibility = "hidden";
            starv[i] = 0;
            return;
        }
    } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
    }
}

function update_tiny(i) {
    if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
    }
    if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown) {
            tiny[i].style.top = tinyy[i] + "px";
            tinyx[i] += (i % 5 - 2) / 5;
            tiny[i].style.left = tinyx[i] + "px";
        } else {
            tiny[i].style.visibility = "hidden";
            tinyv[i] = 0;
            return;
        }
    } else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;

function mouse(e) {
    set_scroll();
    y = (e) ? e.pageY : event.y + sdown;
    x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
    if (typeof (self.pageYOffset) == "number") {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    } else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    } else {
        sdown = 0;
        sleft = 0;
    }
}

window.onresize = set_width;

function set_width() {
    if (typeof (self.innerWidth) == "number") {
        swide = self.innerWidth;
        shigh = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
    } else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
    }
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    div.style.backgroundColor = colour;
    return (div);
}

/**************************************************************/
/*                ArrayJS                                    */
/**************************************************************/

// Magiical items array
let magicWeapons = JSON.parse(localStorage.getItem('magicWeapons')) ?
    JSON.parse(localStorage.getItem('magicWeapons')) : [{
            id: 1,
            name: "Cutie Moon Rod",
            type: "Rod",
            abilities: "Healing or purifying evil forces Destroying enemies",
            image: `../weapons/Cutie-Moon-Rod_Sailor-Moon/Gif/Cutie-Moon-Rod.webp`,
            price: 1500,
        },
        {
            id: 2,
            name: "Eternal Tiare",
            type: "Rod",
            abilities: "Destroying and healing enemies",
            image: `../weapons/Eternal-Tiare_Sailor-Moon/Gif/Eternal-Tiare.webp`,
            price: 2000,
        },
        {
            id: 3,
            name: "Garnet Rod",
            type: "wand",
            abilities: "Attacking and wiping out enemies, Control over the Space-Time Door,Time travel, Ability to stop all of time(forbidden) Control over the space-time continuum ",
            image: `../weapons/Garnet-Rod_Sailor-Moon/Gif/Garnet-Rod.webp`,
            price: 5000,
        },
        {
            id: 4,
            name: "Moon Kaleido Scope",
            type: "Sword",
            abilities: "Destroying Lemures",
            image: `../weapons/Moon-Kaleido-Scope_Sailor-Moon/Moon-Kaleido-Scope.gif`,
            price: 3000,
        },
        {
            id: 5,
            name: "Moon Stick",
            type: "Rod",
            abilities: "Healing victims and destroying enemies",
            image: `../weapons/Moon-Stick_Sailor-Moon/Gif/Moon_Stick.webp`,
            price: 800,
        },
        {
            id: 6,
            name: "Sailor Star Yell",
            type: "Disc",
            abilities: "Attacking and destroying enemies",
            image: `../weapons/Sailor-Star-Yell_Sailor-Moon/Gif/Sailor-Star-Yell.webp`,
            price: 2500,
        },
        {
            id: 7,
            name: "Sealing Wand Clow Form",
            type: "Wand",
            abilities: "Ability to seal or summon Clow Cards at will",
            image: `../weapons/Sealing-Wand-Cloud-Form_Card-Captor/Gif/Sealing-Wand-Clow-Form.gif`,
            price: 3500,
        },
        {
            id: 8,
            name: "Sealing Wand Dream Form",
            type: "Wand",
            abilities: "Seal and utilize the Clear Cards",
            image: `../weapons/Sealing-Wand-Dream-Form_Card-Captor/Gif/Sealing-Wand-Dream-Form.gif`,
            price: 5000,
        },
        {
            id: 9,
            name: "Sealing Wand Star Form",
            type: "Wand",
            abilities: "Ability to seal or summon Clow Cards at will and the power to change the cards into Sakura Cards",
            image: `../weapons/Sealing-Wand-Star-Form_Card-Captor/Gif/Sealing-Wand-Cloud-Form.webp`,
            price: 4500,
        },
        {
            id: 10,
            name: "Spiral Heart Moon Rod",
            type: "Rod",
            abilities: "Purifying monster-turned humans",
            image: `../weapons/Spiral-Hear-Moon-Rod_Sailor-Moon/Gif/Spiral-Heart-Moon-Rod.webp`,
            price: 3000,
        },
        {
            id: 11,
            name: "Talaria Shoes",
            type: "Shoe",
            abilities: "Gives the user the ablity to temporarily fly/ glide",
            image: `../weapons/Talaria-Shoes_Card-Captor/Gif/Talaria-Shoes.webp`,
            price: 500,
        },
        {
            id: 12,
            name: "Wings of Icarus",
            type: "Wings",
            abilities: "The ablility to fly",
            image: `../weapons/Wings-of-Icarus_Sailor-Moon/Gif/Wings-of-Icarus.gif`,
            price: 4000,
        },
    ];


let display = document.getElementById('properties')
// clear array
function loadData(j) {
    console.log(j);
    display.innerHTML = "";

    // displaying on html
    j.forEach((item) => {
        display.innerHTML += `
    <div class=" col-md-6">
    
    <div class="card mx-auto" style="width: 40rem;position:relative; height:350px; margin-bottom: 40px" data-aos="fade-up" data-aos-duration="3000">

            <img class="card-img-top img-fluid" 
            style="height: 350px; object-fit: cover; " src="${item.image}" alt="Card image cap">

            <div id="backface" class="card-body">

                <h5 class="card-title" style="padding-bottom: 1rem;">${item.name}</h5>

                <p class="card-text">
                    ${item.abilities}
                </p>

                <p class="card-text row">
                    <div class="col-6">
                        <i class="fa-solid fa-wand-sparkles"></i>
                        <strong>${item.type}</strong>
                    </div> 
                    <div class="col-6">
                        <i class="bi bi-stars"></i>
                        <strong>${item.price} stardust</strong>
                    </div>
                </p>

            </div>
    </div>
    </div>
    `
    })
    AOS.init();
}

loadData(magicWeapons)

// sort type dropdown
function typeSort(e) {
    const type = e.target.value;
    if (type === "all") {
        return loadData(magicWeapons)
    }
    console.log(typeof type);
    const filtered = magicWeapons.filter((item) => item.type == type);

    return loadData(filtered);
}

// textSearch
const textSearch = (e) => {
    const text = e.target.value;
    const filteredItems = magicWeapons.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
    );
    
    loadData(filteredItems);
};

// sort price dropdown
function priceSort(e) {
    const type = e.target.value;
    if (type === "all") {
        return loadData(magicWeapons)
    }
    console.log(typeof type);
    const filtered = magicWeapons.filter((item) => item.price == type);

    return loadData(filtered);
}