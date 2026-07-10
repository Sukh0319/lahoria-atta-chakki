/*================ FAQ =================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
// ================= SCROLL ANIMATION =================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));
// ================= LOADER =================

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1500);

});