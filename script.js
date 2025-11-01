// Cart logic
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartBody = document.getElementById("cart-body");
  const cartTotal = document.getElementById("cart-total");
  if (!cartBody) return;
  cartBody.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.price}</td>`;
    cartBody.appendChild(row);
    total += item.price;
  });
  cartTotal.textContent = total;
}

// Filter logic for books
function filterBooks() {
  const select = document.getElementById("category-filter");
  const category = select.value;
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});
/**
 * ===========================================
 * Client-Side Form Validation (for contact.html)
 * ===========================================
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            let isValid = true;
            const email = this.querySelector('input[name="email"]').value;
            const message = this.querySelector('textarea[name="message"]').value;

            // Simple Email Validation (Checks for basic format)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            // Simple Message Length Validation (Prevents very short or empty messages)
            if (message.length < 10) {
                alert('Your message must be at least 10 characters long.');
                isValid = false;
            }

            // If all checks pass, the form is submitted (to the server-side endpoint)
            if (isValid) {
                alert('Message sent successfully! (Simulated submission)');
                // In a real application: this.submit();
            }
        });
    }

    // You would add similar validation logic for the checkout.html form here.
    const checkoutForm = document.querySelector('.checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Simple Check for required fields and basic email validation
            const emailInput = this.querySelector('input[type="email"]');
            const deliveryAddress = this.querySelector('textarea');
            let isCheckoutValid = true;

            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address for your order.');
                isCheckoutValid = false;
            }

            if (deliveryAddress.value.trim().length < 15) {
                alert('Please provide a complete delivery address.');
                isCheckoutValid = false;
            }

            if (isCheckoutValid) {
                // Navigate to the next step, since the HTML is a mock-up
                alert('Order placed! (Simulated submission)');
                window.location.href = 'order-confirmation.html';
            }
        });
    }

    // Remaining functions for cart/book filtering would go here (e.g., filterBooks, addToCart)
    // ...
});
