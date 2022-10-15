const menu2 = document.getElementById("menu2");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector("#logo")
const linewrapper = document.querySelector("#linewrapper");
const ullist = document.querySelector(".ullist");
const ball1 = document.querySelector("#ball1");
const html = document.querySelector("html");

menu2.onclick = function () {
    menu2.classList.toggle("openmenu2");
    navigation.classList.toggle("opennav");
    logo.classList.toggle("logogone");
    ullist.classList.toggle("reopennav")
    ball1.classList.toggle("showball");
    html.classList.toggle("noscrollburger");
}


// if (100 === 100) {
//     linewrapper.style.backgroundColor = "black";
// }


