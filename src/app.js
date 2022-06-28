const btn = document.querySelector("button.menu-btn");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector("#dropdown")
const dropdownBtn = document.querySelector("#dropdownBtn")


btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");


});

dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");


});