console.log("script.js loaded");


let selectedLaptop = "";

// Buy button click
function buyNow(name) {
  selectedLaptop = name;
  document.getElementById("buyModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("buyModal").style.display = "none";
}

// Confirm order
function confirmOrder() {
  const name = document.getElementById("custName").value;
  const mobile = document.getElementById("custMobile").value;
  const address = document.getElementById("custAddress").value;
  const payment = document.getElementById("payment").value;

  if (!name || !mobile || !address || !payment) {
    alert("Please fill all details");
    return;
  }

  alert(
    "✅ Order Placed Successfully!\n\n" +
    "Laptop: " + selectedLaptop + "\n" +
    "Name: " + name + "\n" +
    "Mobile: " + mobile + "\n" +
    "Payment: " + payment + "\n\n" +
    "Our team will contact you shortly."
  );

  closeModal();
}
// Mobile menu toggle (SAFE VERSION)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // 🔥 VERY IMPORTANT SAFETY CHECK
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
function goDetails(product) {
  window.location.href = "details.html?product=" + product;
}






