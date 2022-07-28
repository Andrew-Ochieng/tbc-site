// toggle menu-bar
const btn = document.querySelector("button.menu-btn");
const menu = document.querySelector(".menu");
const year = document.getElementById('copyright')

// toggle menubar
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

});


// display current year
const currentYear = new Date().getFullYear()

year.innerHTML = currentYear













