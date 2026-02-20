console.log("script.js loaded");

/* ================= CART SYSTEM ================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = cart.length;
}

updateCartCount();

/* ================= ADD TO CART ================= */

const buttons = document.querySelectorAll(".add-to-cart");
console.log("Buttons found:", buttons.length);

buttons.forEach(function (btn) {

  btn.addEventListener("click", function () {

    const card = this.closest(".card");

    const name = card.querySelector("h3").innerText;
    const priceText = card.querySelector(".price").innerText;
    const image = card.querySelector("img").getAttribute("src");

    const price = parseInt(priceText.replace(/[^0-9]/g, ""));

    cart.push({
      name: name,
      price: price,
      image: image,
      qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
  });

});


/* ================= NAVBAR CART CLICK ================= */

const cartIcon = document.getElementById("cartIcon");

if (cartIcon) {
  cartIcon.addEventListener("click", function () {
    window.location.href = "cart.html";
  });
}


/* ================= THEME TOGGLE ================= */

const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
}


/* ================= MOBILE MENU TOGGLE ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
}