// -------------------- TOGGLE BUTTON -----------------
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// Clicking on the hamburger icon will toggle the menu.
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle('ri-close-large-line');
});

// Clicking on any nav link will close the menu.
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("left-[0]");
        navMenu.classList.add("left-[-100%]");
        hamburger.classList.remove('ri-close-large-line');
    });
});
