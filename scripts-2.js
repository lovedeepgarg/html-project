// scripts-2.js

document.addEventListener("DOMContentLoaded", function() {
  const productNames = document.querySelectorAll(".product h2");
  productNames.forEach(function(productName) {
      productName.addEventListener("click", function() {
          this.classList.toggle("show-full-name");
      });
  });

  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      
      // Check if form fields are filled
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      
      if (name && email && message) {
        // Redirect to success page
        window.location.href = "success.html";
      }
  });
});
