/*--------Nav_Menu------*/

function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
};

/*--------Dark mode------*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/*--------Typing effect------*/

const typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Software Developer", "Web Designer"],

    
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
});

/*-------Project Container--------*/
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let forBtn = document.getElementById("forBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "aoto";
});

forBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});


/*--------Scroll Animation------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".featured-name", {
    delay: 100
});
sr.reveal(".text-info", {
    delay: 200
});
sr.reveal(".text-btn", {
    delay: 200
});
sr.reveal(".social-icons", {
    delay: 200
});
sr.reveal(".skills .skills-box ", {
    delay: 200
});
sr.reveal(".featured-image", {
    delay: 320
});


sr.reveal(".project-box", {
    interval: 200
});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info" , {delay: 100});
srLeft.reveal(".contact-info" , {delay: 100});


const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".edu" , {delay: 100});
srRight.reveal(".edu-item" , {delay: 100});


const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(" .nav-menu a [href*= "+ sectionId + "]" )
            .classList.add("acttive-link");
        }  else {
            document
            .querySelector(" .nav-menu a [href*= "+ sectionId + "]" )
            .classList.remove("acttive-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);


