let cart = JSON.parse(localStorage.getItem("cart")) || {};

// ADD TO CART (AUTO +1)
function addToCart(item, price, id) {

    if (!cart[item]) {
        cart[item] = {
            price: price,
            qty: 0
        };
    }

    cart[item].qty += 1;

    localStorage.setItem("cart", JSON.stringify(cart));

    // update number on menu page
    let el = document.getElementById(id);
    if (el) el.textContent = cart[item].qty;

    updateCart();
}

// SHOW CART (IMPORTANT FIX 🔥)
function updateCart() {
    let cartList = document.getElementById("cart");
    if (!cartList) return;

    cartList.innerHTML = "";

    let total = 0;

    for (let item in cart) {

        let qty = cart[item].qty;
        let price = cart[item].price;

        let subtotal = qty * price;

        let li = document.createElement("li");
        li.textContent = `${item} x${qty} = ₱${subtotal}`;

        cartList.appendChild(li);

        total += subtotal;
    }

    let totalEl = document.getElementById("total");
    if (totalEl) totalEl.textContent = total;
}

// CHECKOUT
function checkout() {
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html";
}

// AUTO LOAD
updateCart();
