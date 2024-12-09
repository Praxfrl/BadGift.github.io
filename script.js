document.addEventListener("DOMContentLoaded", () => {
  const vibratingHeart = document.querySelector(".vibrating-heart");
  const container = document.querySelector(".container");
  const envelopeWrapper = document.querySelector(".envelope-wrapper");
  const envelopeHeart = document.querySelector(".envelope-heart");

  // Fade out heart and fade in envelope
  setTimeout(() => {
    vibratingHeart.style.display = "none"; // Hide vibrating heart
    container.style.display = "flex"; // Show envelope container
  }, 7000); // Wait for heart fade-out animation to finish

  // Heart click event to trigger envelope open
  envelopeHeart.addEventListener("click", () => {
    envelopeHeart.classList.add("fade-out"); // Fade out heart
    setTimeout(() => {
      envelopeWrapper.classList.add("open"); // Open the envelope
    }, 500); // Wait for heart fade-out animation to finish
  });
});
