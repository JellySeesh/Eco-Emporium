document.addEventListener('DOMContentLoaded', () => {
    let product = JSON.parse(localStorage.getItem('product'));
    let subtotal = product.price;
    let gst = subtotal * 0.18;
    let total = subtotal + gst;

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('price').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('gst').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;

    document.getElementById('billing-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
         // Example of handling payment
        let paymentMethod = document.getElementById('payment-method').value;
        let address = document.getElementById('address').value;
        let phone = document.getElementById('phone').value;
        
         // Simulate payment processing
         let receiptData = {
            productName: product.name,
            price: subtotal.toFixed(2),
            gst: gst.toFixed(2),
            total: total.toFixed(2),
            address: address,
            phone: phone,
            paymentMethod: paymentMethod
        };
        
        // Clear cart and product data
        localStorage.setItem('receipt', JSON.stringify(receiptData));
        localStorage.removeItem('cart');
        localStorage.removeItem('product');

        window.location.href = 'receipt.html'; // Redirect to the receipt page
    });
});
