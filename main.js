// const navbarEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

const navbarEmail = $('.navbar-email'); 
const desktopMenu = $('.desktop-menu');

// // Toggle menu on click
// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }

// Toggle menu on click
const toggleDesktopMenu = () => desktopMenu.classList.toggle('inactive');

// Add event listener to navbarEmail
navbarEmail.addEventListener('click', toggleDesktopMenu);