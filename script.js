let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART (silent)
function addToCart(item, price, qtyId) {
    let qty = document.getElementById(qtyId).value;

    cartItems.push({
        name: item,
        price: price,
        qty: qty
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
}

// SHOW CART
function displayCart() {
    let cart = document.getElementById("cart");
    let total = 0;

    if (!cart) return;

    cart.innerHTML = "";

    cartItems.forEach((item) => {
        let subtotal = item.price * item.qty;

        let li = document.createElement("li");
        li.textContent = `${item.name} x${item.qty} = ₱${subtotal}`;

        cart.appendChild(li);

        total += subtotal;
    });

    document.getElementById("total").textContent = total;
}

// CHECKOUT (IMPORTANT FIX 🔥)
function checkout() {
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html";
}

// auto load cart page
displayCart();