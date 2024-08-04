// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Get elements
    const addToCartButton = document.querySelector('.btn-primary');
    const buyNowButton = document.querySelector('.btn-secondary');
    
    // Handle "Add to Cart" click
    addToCartButton.addEventListener('click', () => {
        // Add product to cart (pseudo-code)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let product = { name: 'Product Name', price: 800 }; // Example product data
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show popup
        alert('Product added to cart! Click OK to view your cart.');
        window.location.href = 'cart.html';
    });
    
    // Handle "Buy Now" click
    buyNowButton.addEventListener('click', () => {
        let product = { name: 'Product Name', price: 800 }; // Example product data
        localStorage.setItem('product', JSON.stringify(product));
        window.location.href = 'payment.html';
    });
});
