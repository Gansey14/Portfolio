// Variables

const menu2 = document.getElementById("menu2");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector("#logo")
const linewrapper = document.querySelector("#linewrapper");
const ullist = document.querySelector(".ullist");
const ball1 = document.querySelector("#ball1");
const html = document.querySelector("html");
const textColorVariable = "--text";
const backgroundColorVariable = "--background";
const body = document.body;
const blurButton = document.getElementById('blurButton');
const moreButton = document.getElementById('btn-detail');
const detailSection = document.querySelector('.detail');
const linktodetail = document.querySelector('#linktodetail');
const chevron = document.querySelector('.fa-chevron-right');
const changeColorWord = document.querySelector('#changeColorWord');
const linkNavWork = document.querySelector('#linkNavWork');
const linkNavAbout = document.querySelector('#linkNavAbout');
const linkNavContact = document.querySelector('#linkNavContact');
const breakpoint = 1100;

const backgroundColors = ["#EBEDED", "#f1fffa", "#282B29", "#F4C4C4", "#0C0910"]
const textColors = ["#E83C38", "#3C4F76", "#F4C4C4", "#282B29", "#d6bcfb"]

// Nav functionality

function toggleNav() {
    menu2.classList.toggle("openmenu2");
    navigation.classList.toggle("opennav");
    logo.classList.toggle("logogone");
    ullist.classList.toggle("reopennav")
    ball1.classList.toggle("showball");
    html.classList.toggle("noscrollburger");
}

menu2.onclick = toggleNav;

if (window.innerWidth <= breakpoint) {
    linkNavWork.addEventListener('click', toggleNav);
    linkNavAbout.addEventListener('click', toggleNav);
    linkNavContact.addEventListener('click', toggleNav);
}

// Changing color themes

let number = 1;

changeColorWord.addEventListener("click", _ => {
    if (number < 4) {
        number += 1;
    } else (
        number = number - 4
    )
    console.log(number);
    document.documentElement.style.setProperty(backgroundColorVariable, backgroundColors[number]);
    document.documentElement.style.setProperty(textColorVariable, textColors[number]);
})

// Blur effect

blurButton.addEventListener('click', () => {
    // Toggle the 'blurred' class on the body element
    body.classList.toggle('blurred');
});

// Remove the blur when clicking anywhere else on the document
document.addEventListener('click', (event) => {
    if (!blurButton.contains(event.target)) {
        body.classList.remove('blurred');
    }
});

// Hide and unhide "Find out more" section

moreButton.addEventListener('click', () => {
    // Check if the element is currently hidden
    if (detailSection.style.display === 'none') {
        // If hidden, show the element
        detailSection.style.display = 'flex';
        linktodetail.innerText = "Hide detail";
    } else {
        // If visible, hide the element
        detailSection.style.display = 'none';
        linktodetail.innerText = "Find out more";
    }
});







