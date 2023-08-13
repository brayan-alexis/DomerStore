const $ = (selector) => document.querySelector(selector); // Shortcut for querySelector

// Nanbar menu icons
const menuIcon = $('.menu'); 
const menuEmail = $('.navbar-email');
const cartIcon = $('.navbar-shopping-cart');
// Product detail
//const hideProductDetail = $('.product-detail-close'); // Close product detail icon
// Menus
const mobileMenu = $('.mobile-menu'); 
const desktopMenu = $('.desktop-menu');
// Containers
const cardsContainer = $('.cards-container'); // Container for product cards

const shoppingCartContainer = $('.shopping-cart-container');
const shoppingCartProducts = $('.shopping-cart-products');
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
//hideProductDetail.addEventListener('click', hideProductDetailContainer);

const productList = []; // List of products

// Add products to productList
productList.push({
    id: '1',
    name: 'Basic White T-Shirt', 
    price: 10,
    image: 'https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality white t-shirt made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});
productList.push({
    id: '2',
    name: 'White T-Shirt Minimalist Design',
    price: 20,
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality white t-shirt with minimalist design made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});
productList.push({
    id: '3',
    name: 'White T-Shirt with Basic logo',
    price: 25,
    image: 'https://images.pexels.com/photos/14769479/pexels-photo-14769479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality white t-shirt with Basic logo made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});
productList.push({
    id: '4',
    name: 'Blue T-Shirt with Superman logo',
    price: 30,
    image: 'https://images.pexels.com/photos/8249696/pexels-photo-8249696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality blue t-shirt made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});
productList.push({
    id: '5',
    name: 'Color blouse',
    price: 35,
    image: 'https://images.pexels.com/photos/11843404/pexels-photo-11843404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality color blouse made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});
productList.push({
    id: '6',
    name: 'White T-Shirt with Superman logo',
    price: 30,
    image: 'https://images.pexels.com/photos/8249697/pexels-photo-8249697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This is a high-quality white t-shirt with Superman logo made from soft cotton fabric. It\'s a versatile and essential piece for your wardrobe.'
});

// Function to render products
function renderProducts(productList){
    // Create product cards
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.productId = product.id;
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
        //productFigure.addEventListener('click', addShoppingCart);
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

// Variable to store the current product
let currentProduct = null;

// Function to show product detail container
function showProductDetail (){
    // Clear the previous content of productDetailContainer
    while (productDetailContainer.firstChild) {
        productDetailContainer.removeChild(productDetailContainer.firstChild);
    }

    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

    const productId = this.dataset.productId;
    const product = productList.find(item => item.id === productId);

    if (product) {
        renderProductDetail(product);
        currentProduct = product;
    }
}

// Function to render product detail in the productDetailContainer
function renderProductDetail(product) {
    // const productDetail = document.createElement('div');
    // productDetail.classList.add('product-detail');

    // Close button for product detail container
    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');
    productDetailClose.addEventListener('click', hideProductDetailContainer);
    const productDetailCloseImg = document.createElement('img');
    productDetailCloseImg.src = './assets/icons/icon_close.png';
    productDetailCloseImg.alt = 'close';
    productDetailClose.appendChild(productDetailCloseImg);

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const divProductDetail = document.createElement('div');
    divProductDetail.classList.add('product-info');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}.00`;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    // Button to add product to cart
    const productFigure = document.createElement('figure');
    productFigure.addEventListener('click', addShoppingCart);
    const productFigureImg = document.createElement('img');
    productFigureImg.src = 'assets/icons/bt_add_to_cart.svg';
    const buttonAddToCart = document.createElement('button');
    buttonAddToCart.classList.add('primary-button', 'add-to-cart-button');
    buttonAddToCart.textContent = 'Add to cart';
    buttonAddToCart.appendChild(productFigureImg); // Add productFigureImg to buttonAddToCart
    productFigure.appendChild(buttonAddToCart); // Add productFigure to buttonAddToCart

    divProductDetail.append(productName, productPrice, productDescription, productFigure); // Add productName, productPrice, productDescription, and productFigure to divProductDetail

    // Add productImage, productName, and productPrice to the productDetail
    //productDetail.append(productImage, divProductDetail);

    // Clear the previous content of productDetailContainer
    //productDetailContainer.innerHTML = '';

    // Add productDetail to the productDetailContainer
    //productDetailContainer.appendChild(productDetail);
    productDetailContainer.appendChild(productDetailClose);
    productDetailContainer.appendChild(productImage);
    productDetailContainer.appendChild(divProductDetail);
}

// Function to render shopping cart products
function renderShoppingCartProducts(product) {
    const shoppingCartProducts = document.querySelector('.shopping-cart-products'); // Select the shopping cart products container

    // Create product container
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Create shopping cart structure
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    // Figure
    const shoppingCartFigure = document.createElement('figure');
    const shoppingCartFigureImg = document.createElement('img');
    shoppingCartFigureImg.src = product.image;
    shoppingCartFigureImg.alt = product.name;
    shoppingCartFigure.appendChild(shoppingCartFigureImg); // Add shoppingCartFigureImg to shoppingCartFigure

    // Title (p) for shopping cart
    const shoppingCartTitle = document.createElement('p');
    shoppingCartTitle.textContent = product.name;

    // Price (p) for shopping cart
    const shoppingCartPrice = document.createElement('p');
    shoppingCartPrice.textContent = `$${product.price}.00`;

    // Button to remove product from cart
    const shoppingCartFigureRemove = document.createElement('img');
    shoppingCartFigureRemove.src = 'assets/icons/icon_close.png';
    shoppingCartFigureRemove.alt = 'close';
    const buttonRemoveFromCart = document.createElement('button');
    //buttonRemoveFromCart.classList.add('primary-button', 'remove-from-cart-button');
    buttonRemoveFromCart.appendChild(shoppingCartFigureRemove); // Add shoppingCartFigureRemove to buttonRemoveFromCart
    shoppingCartFigure.appendChild(buttonRemoveFromCart); // Add buttonRemoveFromCart to shoppingCartFigure

    shoppingCart.appendChild(shoppingCartFigure);
    shoppingCart.appendChild(shoppingCartTitle);
    shoppingCart.appendChild(shoppingCartPrice);
    shoppingCart.appendChild(shoppingCartFigureRemove);

    // Add shopping cart to the product container
    shoppingCartProducts.appendChild(shoppingCart);

    // Add shopping cart products to the shopping cart products container
    shoppingCartContainer.appendChild(shoppingCartProducts);

    // Add shopping cart products to the shopping cart products container
    const shoppingCartProductsContainer = document.querySelector('.shopping-cart-products');
    const myOrderContent = document.querySelector('.my-order-content');

    // Add the rendered shopping cart product to the shopping cart products container
    shoppingCartProductsContainer.appendChild(shoppingCart);

    // Move the shopping cart products container to be the first child of myOrderContent
    myOrderContent.insertBefore(shoppingCartProductsContainer, myOrderContent.firstChild);
}

// Function to add product to shopping cart
function addShoppingCart() {
    // Add product to shopping cart
    renderShoppingCartProducts(currentProduct);
}