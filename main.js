// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

const menuEmail = $('.navbar-email'); 
const desktopMenu = $('.desktop-menu');
const menuIcon = $('.menu');
const mobileMenu = $('.mobile-menu');

// // Toggle menu on click
// function toggleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }

// Toggle menu on click
const toggleDesktopMenu = () => desktopMenu.classList.toggle('inactive');
const toggleMobileMenu = () => mobileMenu.classList.toggle('inactive');

// Add event listener to menuEmail to toggle desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);
// Add event listener to menuIcon to toggle mobile menu
menuIcon.addEventListener('click', toggleMobileMenu);