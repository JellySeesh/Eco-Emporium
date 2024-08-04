document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.querySelector('.cart-items');
    let subtotal = 0;

    // Function to update the cart
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        subtotal = 0;
        cart.forEach((item, index) => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name} - ₹${item.price}</p>
                <input type="number" value="${item.quantity || 1}" min="1" class="quantity-input" data-index="${index}">
                <button class="remove-button" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price * (item.quantity || 1);
        });

        let gst = subtotal * 0.18;
        let total = subtotal + gst;

        document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('gst').textContent = `₹${gst.toFixed(2)}`;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    }

    updateCart();

    // Handle quantity changes
    cartItemsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            let index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value, 10);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    // Handle item removal
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button')) {
            let index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    // Checkout button
    document.getElementById('checkout-button').addEventListener('click', () => {
        window.location.href = 'payment.html';
    });

    // Continue shopping button
    document.getElementById('continue-shopping-button').addEventListener('click', () => {
        window.location.href = 'main.html'; // Change to your product listing page
    });
});
