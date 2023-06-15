const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

// Nanbar menu icons
const menuIcon = $('.menu'); 
const menuEmail = $('.navbar-email');
const cartIcon = $('.navbar-shopping-cart');
// Product detail
const hideProductDetail = $('.product-detail-close'); // Close product detail icon
// Menus
const mobileMenu = $('.mobile-menu'); 
const desktopMenu = $('.desktop-menu');
// Containers
const cardsContainer = $('.cards-container'); // Container for product cards
// Aside containers
const shoppingCartContainer = $('.shopping-cart-container');
const productDetailContainer = $('.product-detail-container');


// Toggle menu on click
const toggleMobileMenu = () => { 
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive'); 
} 
const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
const toggleshoppingCartContainer = () => {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

// Function to hide product detail container
function hideProductDetailContainer (){
    productDetailContainer.classList.toggle('inactive');
}
// Function to show product detail container
function showProductDetail (){
    // mobileMenu.classList.add('inactive'); //Maybe not needed
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

// Add event listener to menuIcon to toggle mobile menu
menuIcon.addEventListener('click', toggleMobileMenu);
// Add event listener to menuEmail to toggle desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);
// Add event listener to cartIcon to toggle product detail
cartIcon.addEventListener('click', toggleshoppingCartContainer);
// Add event listener to hideProductDetail to close product detail container
hideProductDetail.addEventListener('click', hideProductDetailContainer);

const productList = []; // List of products

// Add products to productList
productList.push({
    id: '1',
    name: 'Basic White T-Shirt', 
    price: 25,
    image: 'https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    image: 'https://images.pexels.com/photos/14769479/pexels-photo-14769479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    id: '4',
    name: 'Basic Red T-Shirt',
    price: 25,
    image: 'https://images.pexels.com/photos/8249696/pexels-photo-8249696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    id: '5',
    name: 'Basic Blue T-Shirt',
    price: 25,
    image: 'https://images.pexels.com/photos/11843404/pexels-photo-11843404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

// Function to render products
function renderProducts(productList){
    // Create product cards
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', showProductDetail);

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