const navContainer = document.querySelector(".nav-container");
const navbar = document.querySelector(".navbar");
const navBtn = document.querySelector(".nav-toggler");
const icon = document.querySelector(".nav-toggler i");

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the navbar visibility
  function toggleNav() {
    navContainer.classList.toggle("active");
    navbar.classList.toggle("active");
  }

  // Event listener for toggling the navbar
  navBtn.addEventListener("click", function () {
    toggleNav();
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  });

  // Event listener to close navbar when clicking outside
  document.addEventListener("click", function (e) {
    const isClickedInsideBtn = navBtn.contains(e.target);
    const isClickedInsideNavbar = navbar.contains(e.target);
c 
    if (!isClickedInsideBtn && !isClickedInsideNavbar) {
      navContainer.classList.remove("active");
    }
  });
});
