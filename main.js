const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener('click' , ()=>{
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "&times;" ;
    }
    else{
        menuToggle.innerHTML =  "&#9776;" ;
    }
})


const navItems =  document.querySelectorAll(".nav-links");
navItems.forEach((item) => {
    item.addEventListener("click" , () =>{
        navLinks.classList.remove("active");
        menuToggle.innerHTML =  "&#9776;";
    })
})

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll" , ()=>{
    if(window .scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
})

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach((element)=>{
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }
    })
}

window.addEventListener("scroll" ,revealOnScroll );
revealOnScroll();


const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark");

    if( document.body.classList.contains("dark")){
        themeToggle.innerHTML =  "&#9728;" ;
    }
    else{
        themeToggle.innerHTML = "&#127769;";
    }

    localStorage.setItem("theme" , document.body.classList.contains("dark") ? "dark" : "light" );
})

if(localStorage.getItem("theme")=== "dark"){
    document.body.classList.add("dark");
     themeToggle.innerHTML = "&#127769;";

}

const typeWriter = document.querySelector("#typewriter");

const text = "Freshly Brewed Coffee For Every Moment";
let index = 0;

typeWriter.innerHTML = "" ;

function typingEffect (){
    if(index < text.length){
        typeWriter.innerHTML  += text.charAt(index);
        index++;
        setTimeout(typingEffect , 70); 
    }
}

typingEffect();
