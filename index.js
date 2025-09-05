// Navbar counter
let heartCounter = document.getElementById("heart-counter");
let count = 0;

// All heart buttons
let heartButtons = document.querySelectorAll(".heart-btn");

// Add click event to each button
heartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
   heartCounter.textContent = count;
  });
});
