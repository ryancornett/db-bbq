// Mobile Hamburger Menu *** (can't find source from which I customized) ***

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Add/remove classes based on scroll position

const scrlDef = 
    ['.fixed-header',
    'nav',
    '.nav-link',
    '.logo-shift'];

const scrlAlt = 
    ['fixed-header-behind',
    'navbar-light',
    'nav-link-dark',
    'logo-shift-black'];

$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        for (let i = 0; i < scrlDef.length; i++) {
            $(scrlDef[i]).addClass(scrlAlt[i]);
        }
    } else {
        for (let i = 0; i < scrlDef.length; i++) {
            $(scrlDef[i]).removeClass(scrlAlt[i]);
    }}

});

// Random text canvas display

let animation_text = 
    ['low and slow, baby',
    'the flavor\'s is in the smoke', 
    'get in the queue at the \'cue', 
    'warning: loud lip smacking ahead',
    'self, you deserve a rib platter'];

let ran_num = Math.floor(Math.random() * 5);

function displayText() {
    document.getElementById("random").textContent = animation_text[ran_num];
    document.getElementById("random-reflection").textContent = animation_text[ran_num];
}

for (let j = 0; j < animation_text.length; j++) {
    if (j == ran_num) {
        displayText();
    } else {}
};

// Animated canvas customized from: https://dev.to/jordienr/how-to-make-animated-gradients-like-stripe-56nh

const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let time = 0;

    const color = function (x, y, r, g, b) {
        context.fillStyle = `rgb(${r}, ${g}, ${b})`
        context.fillRect(x, y, 10, 10);
    }
    const R = function (x, y, time) {
        return (Math.floor(305 + 64 * Math.cos((x * x - y * y) / 300 + time)));
    }

    const G = function (x, y, time) {
        return (Math.floor(190 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
    }

    const B = function (x, y, time) {
        return (Math.floor(15 + 64 * Math.sin(5 * Math.sin(time / 3) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    }

    const startAnimation = function () {
        for (x = 0; x <= 25; x++) {
            for (y = 0; y <= 50; y++) {
                color(x, y, R(x, y, -time), G(x, y, time), B(x, y, time));
            }
        }
        time = time + 0.01;
        window.requestAnimationFrame(startAnimation);
    }

    startAnimation();

// Accordion Boxes customized from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol

let coll = document.getElementsByClassName("collapsible");
let k;

for (k = 0; k < coll.length; k++) {
    coll[k].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

// Footer

const date = new Date();
let currentDate = "date";
let minutes = date.getMinutes();

if (date.getHours() > 12 && minutes < 10) {
    let pm = date.getHours();
    pm = pm - 12;
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:0${date.getMinutes()} PM`;
} else if (date.getHours() > 12 && minutes > 9) {
    let pm = date.getHours();
    pm = pm - 12;
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:${date.getMinutes()} PM`;
} else if (date.getHours() < 13 && minutes < 10) {
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:0${date.getMinutes()} AM`;
} else {
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:${date.getMinutes()} AM`;
}
document.getElementById("date-time").textContent = currentDate;
  
const footerDate = new Date();
document.getElementById("current-year").textContent = footerDate.getFullYear();
