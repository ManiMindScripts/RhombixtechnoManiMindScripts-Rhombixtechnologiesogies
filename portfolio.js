/**************************   Toggle icon navbar         ***************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')


}
/**************************   scroll section           ***************************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    /**************************   sticky section           ***************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
        
         /**************************  Remove  Toggle icon  and navbar         ***************************/
         menuIcon.classList.remove('fa-x');
         navbar.classList.remove('active');

};
 /**************************  Scroll Reveal js setup        ***************************/
 ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200,
  });
  ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
  ScrollReveal().reveal('.skills-main, .project-box , .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'  });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

   /**************************  typed js       ***************************/
   const typed = new Typed ('.multipled-text', {
            strings: ['Front-end Developer', 'Web Designer '],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop:true,
   });

//    prompt("Enter your Name");
//    var firstName = prompt("Enter your Name");
//    var greeting = "WelCome" + firstName;
//    alert(greeting);




