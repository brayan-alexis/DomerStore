// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

// Menu icons
const menuIcon = $('.menu'); 
const menuEmail = $('.navbar-email');
const cartIcon = $('.navbar-shopping-cart');
// Menus
const mobileMenu = $('.mobile-menu'); 
const desktopMenu = $('.desktop-menu');
const productDetail = $('.product-detail'); // Aside product detail

// Toggle menu on click
const toggleMobileMenu = () => { 
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive'); 
} 
const toggleDesktopMenu = () => {
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
const toggleProductDetail = () => {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.toggle('inactive');
}

// Add event listener to menuIcon to toggle mobile menu
menuIcon.addEventListener('click', toggleMobileMenu);
// Add event listener to menuEmail to toggle desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);
// Add event listener to cartIcon to toggle product detail
cartIcon.addEventListener('click', toggleProductDetail);