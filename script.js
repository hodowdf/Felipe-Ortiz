/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================
   TERMINAL CURSOR
========================= */

const cursor = document.getElementById("terminal-cursor");

let cursorVisible = true;

setInterval(() => {

    if (!cursor) return;

    cursorVisible = !cursorVisible;

    cursor.style.opacity = cursorVisible ? "1" : "0";

}, 500);


/* =========================
   SCROLL ANIMATIONS
========================= */

const animatedElements = document.querySelectorAll(
    ".section, .skill-card, .profile-card, .lab-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(
    '#nav-menu a[href^="#"]'
);

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            navigationLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `#nav-menu a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "%cFelipe Ortiz — Portfolio",
    "color: #9eff00; font-size: 18px; font-weight: bold;"
);

console.log(
    "%cControl de la Seguridad Digital | Soporte TI | Redes | Ciberseguridad",
    "color: #9299a1; font-size: 12px;"
);