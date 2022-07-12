// toggle menu-bar
const btn = document.querySelector("button.menu-btn");
const menu = document.querySelector(".menu");
const mail = document.querySelector(".mail");
const mailForm = document.querySelector("#mailForm");
const mailBtn = document.querySelector('.mail-btn');
const dropdown = document.querySelector('#dropdown')
const dropdownBtn = document.querySelector('#dropdown-btn')


btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// toggle-dropdown
dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden')
})

// dropdown.addEventListener("click", () => {
//     dropdown.classList.toggle("hidden");


// });


// animations
// initialize variables
let heroBtn = document.getElementById('#hero-btn')


let start = Date.now(); // remember start time

let heroBtn = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;

  if (timePassed >= 2000) {
    clearInterval(heroBtn); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);

}, 20);

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}

















