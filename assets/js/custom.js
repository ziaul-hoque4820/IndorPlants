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

// Swiper Function 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});