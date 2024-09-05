//funzione per far funzionare l'hamburger e il banner 

let phonebannertot = document.querySelector(".phonebannertot");

let hamburger = document.querySelector(".hamburger");
let closebanner = document.querySelector(".closebanner");

hamburger.onclick = function () {
    phonebannertot.classList.add("showbanner");
};

closebanner.onclick = function () {
    phonebannertot.classList.remove("showbanner");
};
