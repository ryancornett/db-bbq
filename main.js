// Mobile Hamburger Menu ****************************************************************

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

// Animated Canvas ********************************************************************

const canvas = document.getElementById('canvas');
            const context = canvas.getContext('2d');
            let time = 0;

            const color = function (x, y, r, g, b) {
                context.fillStyle = `rgb(${r}, ${g}, ${b})`
                context.fillRect(x, y, 10, 10);
            }
            const R = function (x, y, time) {
                return (Math.floor(255 + 64 * Math.cos((x * x - y * y) / 300 + time)));
            }

            const G = function (x, y, time) {
                return (Math.floor(80 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
            }

            const B = function (x, y, time) {
                return (Math.floor(20 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
            }

            const startAnimation = function () {
                for (x = 0; x <= 25; x++) {
                    for (y = 0; y <= 63; y++) {
                        color(x, y, R(x, y, -time), G(x, y, time), B(x, y, time));
                    }
                }
                time = time + 0.007;
                window.requestAnimationFrame(startAnimation);
            }

            startAnimation();

// Accordion Boxes ****************************************************

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
    });
}

// Footer ***************************************

const date = new Date();
let currentDate = "date";
var minutes = date.getMinutes();

if (date.getHours() > 12 && minutes < 10) {
    var pm = date.getHours();
    pm = pm - 12;
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:0${date.getMinutes()} PM`;
} else if (date.getHours() > 12 && minutes > 9) {
    var pm = date.getHours();
    pm = pm - 12;
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:${date.getMinutes()} PM`;
} else if (date.getHours() < 13 && minutes < 10) {
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:0${date.getMinutes()} AM`;
  }
else {
    currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:${date.getMinutes()} AM`;
  }
document.getElementById("date-time").innerHTML = currentDate;
  
const footerDate = new Date();
document.getElementById("current-year").innerHTML = footerDate.getFullYear();