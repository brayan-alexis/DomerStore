// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');
const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

// Nanbar menu icons
const menuIcon = $('.menu'); 
const menuEmail = $('.navbar-email');
const cartIcon = $('.navbar-shopping-cart');
// Menus
const mobileMenu = $('.mobile-menu'); 
const desktopMenu = $('.desktop-menu');

const shoppingCartContainer = $('#shopping-cart-container');
// Containers
const cardsContainer = $('.cards-container'); // Container for product cards

// Toggle menu on click
const toggleMobileMenu = () => { 
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive'); 
} 
const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
const toggleshoppingCartContainer = () => {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

// Add event listener to menuIcon to toggle mobile menu
menuIcon.addEventListener('click', toggleMobileMenu);
// Add event listener to menuEmail to toggle desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);
// Add event listener to cartIcon to toggle product detail
cartIcon.addEventListener('click', toggleshoppingCartContainer);

const productList = []; // List of products

// Add products to productList
productList.push({
    id: '1',
    name: 'Basic White T-Shirt', 
    price: 25,
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    id: '2',
    name: 'Basic Black T-Shirt',
    price: 25,
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    id: '3',
    name: 'Basic Gray T-Shirt',
    price: 25,
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

// Function to render products
function renderProducts(productList){
    // Create product cards
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}.00`;
        const productName = document.createElement('p');
        productName.textContent = product.name;
        productInfoDiv.append(productPrice, productName); // Add productPrice and productName to productInfoDiv

        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.src = 'assets/icons/bt_add_to_cart.svg';
        productFigure.appendChild(productFigureImg); // Add productFigureImg to productFigure

        productInfo.append(productInfoDiv, productFigure); // Add productInfoDiv and productFigure to productInfo
        productCard.append(productImage, productInfo); // Add productImage and productInfo to productCard
        cardsContainer.appendChild(productCard); // Add productCard to cardsContainer
    }
}

// Render products
renderProducts(productList);