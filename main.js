// Animations
gsap.registerPlugin(ScrollTrigger);

// gsap.from('.animate-about', {
//     scrollTrigger: {
//         trigger:'.animate-about', 
//         start: "top 80%",
//         end: "10% 70%",
//         toggleActions: "play none reverse none",
//     },
//     delay: 1,
//     duration: 2,
//     opacity: 0,
//     x: -81,
//     stagger: 0.12
// });



// gsap.from('.animate-img', {
//     scrollTrigger: {
//         trigger:'.animate-about', 
//         start: "top 80%",
//         end: "10% 70%",
//         toggleActions: "play none reverse none",
//     },
//     duration: 2,
//     opacity: 0,
//     x: 78,
//     stagger: 2
// });

// gsap.from('.skills-bar span', {
//     scrollTrigger: {
//         trigger:'.skills-wrap',
//         start: "-40% 70%",
//         end: "-40% 50%",
//         toggleActions: "play none reverse none",

//     },
//     delay: 0.8,
//     width: "0px",
//     ease: Power2.easeInOut,
//     duration: 3,
//     stagger: 0.1
// });

// gsap.from('.skills-wrap', {
//     scrollTrigger: {
//         trigger:'.skills-wrap',
//         start: "-40% 70%",
//         end: "-40% 50%",
//         toggleActions: "play none reverse none",
//     },
//     delay: 0.5,
//     duration: 2,
//     opacity: 0,
//     x: -81,
//     stagger: 2
// });

// gsap.from('.skills-heading', {
//     scrollTrigger: {
//         trigger:'.skills-wrap',
//         start: "-40% 70%",
//         end: "-40% 50%",
//         toggleActions: "play none reverse none",
//     },
//     duration: 2,
//     opacity: 0,
//     x: -81,
//     stagger: 2
// });

// gsap.from('.status-body', {
//     scrollTrigger: {
//         trigger:'.skills-wrap',
//         start: "-40% 70%",
//         end: "-40% 50%",
//         toggleActions: "play none reverse none",
//     },
//     delay: 1,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 80,
//     ease: Power2.easeInOut
// });

// gsap.from('.info-body', {
//     scrollTrigger: {
//         trigger:'.interest-title',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-80% 50%",
//     },
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
// });

const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i')

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})


AOS.init({
    disable: function() {
      var maxWidth = 1000;
      return window.innerWidth < maxWidth;
    }
  });