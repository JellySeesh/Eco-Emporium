document.addEventListener('DOMContentLoaded', () => {
    let receipt = JSON.parse(localStorage.getItem('receipt'));

    if (receipt) {
        document.getElementById('product-name').textContent = receipt.productName;
        document.getElementById('price').textContent = `₹${receipt.price}`;
        document.getElementById('gst').textContent = `₹${receipt.gst}`;
        document.getElementById('total').textContent = `₹${receipt.total}`;
        document.getElementById('address').textContent = receipt.address;
        document.getElementById('phone').textContent = receipt.phone;
        document.getElementById('payment-method').textContent = receipt.paymentMethod;
    }

    document.getElementById('continue-shopping-button').addEventListener('click', () => {
        window.location.href = 'main.html'; // Redirect to the home page or product listing page
    });
});
