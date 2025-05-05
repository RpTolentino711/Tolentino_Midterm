$(window).on("scroll", function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 0) {
    $('body').addClass('fixed-header');
  } else {
    $('body').removeClass('fixed-header');
  }
});

$(document).ready(function() {
  new Typed('#type-it-2', {
    strings: ['Networking Specialist', 'IT Infrastructure Consultant'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
});

let lastScrollPosition = 0;
const navbar = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down: hide the navbar
    navbar.classList.add('hidden');
  } else {
    // Scrolling up: show the navbar
    navbar.classList.remove('hidden');
  }

  lastScrollPosition = currentScrollPosition;
});

AOS.init();

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) tablink.classList.remove("active-link");
  for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() { sidemenu.style.right = "0"; }
function closemenu() { sidemenu.style.right = "-200px"; }