
// show menubar
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')



// remove menu mobile


const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//Make project responsive 

const projects = document.querySelectorAll('.project')
projects.forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.classList.add('active');
    })
})

//Nav link to section















// navLink.forEach(n => n.addEventListener('click', linkAction))



// navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/


/*===== CHANGE BACKGROUND HEADER =====*/ 


/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 