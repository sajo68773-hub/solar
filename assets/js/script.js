
// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


// ==========================
// FAQ Accordion
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if(question){

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    }

});


// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.getElementById("scrollTop");

if(scrollBtn){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            scrollBtn.style.display = "flex";

        }else{

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


// ==========================
// Sticky Header
// ==========================

const header = document.querySelector(".header");

if(header){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";

        }else{

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

        }

    });

}


// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


// ==========================
// AOS Animation
// ==========================

if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,
        once:true,
        offset:100

    });

}
console.log("Script Loaded");