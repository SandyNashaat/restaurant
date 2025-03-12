// // In your JavaScript file (e.g., script.js)
// const quantityInput = document.querySelector('.quantity');
// const addToCartButton = document.querySelector('.add-to-cart');

// addToCartButton.addEventListener('click', () => {
//     const quantity = parseInt(quantityInput.value);
//     // Add your logic here (e.g., update cart, show confirmation message, etc.)
//     console.log(`Added ${quantity} item(s) to cart.`);
// });
// script.js
let quantityInput = document.getElementById('quantity');

function increase() {
    let currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
}

function decrease() {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}