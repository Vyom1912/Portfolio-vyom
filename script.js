burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
nav_List = document.querySelector(".navlist");

burger.addEventListener("click", () => {
  nav_List.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
// -------------------------------------------------------------------------------
const scrollSection = document.getElementById("header");
const brandImg = document.getElementById("brand-img");
const brandTxt = document.getElementById("brand-txt");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  var rect = header.getBoundingClientRect();
  var isAtTop = rect.top <= 0;
  if (isAtTop) {
    brandImg.style.display = "none";
    brandTxt.style.opacity = 1;
  } else {
    brandImg.style.display = "block";
    brandTxt.style.opacity = 0;
  }
});

// -------------------------------------------------------------------------------
// underline on links
const nav = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;

    // Get all navlinks
    var navLinks = document.querySelectorAll(".navlist a");

    // Loop through each navlink
    navLinks.forEach(function (link) {
      var sectionId = link.getAttribute("href").substring(1);
      // var
      var section = document.getElementById(sectionId);

      // Calculate the middle position of the section relative to the window
      var sectionMiddle = section.offsetTop + section.offsetHeight / 2;

      if (
        sectionMiddle >= currentScroll &&
        section.offsetTop <= currentScroll + window.innerHeight / 2
      ) {
        // Remove active class from all navlinks
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });
        // Add active class to the corresponding navlink
        link.classList.add("active");
      } else {
        // Remove active class from the corresponding navlink if it's not in view
        link.classList.remove("active");
      }
    });
  });
});
// -------------------------------------------------------------------------------

// scroll top start
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ------------------------------------------------------------------------------------------
// animation at 130px of class
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 130;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// --------------------------------------------------------------------------------------------------
// loder
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
