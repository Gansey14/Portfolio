const menu2 = document.getElementById("menu2");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector("#logo")
const linewrapper = document.querySelector("#linewrapper");
const ullist = document.querySelector(".ullist");
const ball1 = document.querySelector("#ball1");
const html = document.querySelector("html");
const textColorVariable = "--text";
const backgroundColorVariable = "--background";

const backgroundColors = ["#EBEDED", "#f1fffa", "#282B29", "#F4C4C4"]
const textColors = ["#E83C38", "#3C4F76", "#F4C4C4", "#282B29"]

menu2.onclick = function () {
    menu2.classList.toggle("openmenu2");
    navigation.classList.toggle("opennav");
    logo.classList.toggle("logogone");
    ullist.classList.toggle("reopennav")
    ball1.classList.toggle("showball");
    html.classList.toggle("noscrollburger");
}

let number = 1;

html.addEventListener("click", _ => {
    if (number < 3) {
        number += 1;
    } else (
        number = number - 3
    )
    console.log(number);
    document.documentElement.style.setProperty(backgroundColorVariable, backgroundColors[number]);
    document.documentElement.style.setProperty(textColorVariable, textColors[number]);
})








