const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// My next birthday
const targetDate = new Date('2024-12-25T00:00:00').getTime(); // Use ISO format

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  // Time calculations
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  // Update the HTML
  doc.querySelector(".months").innerHTML = months < 10 ? '0' + months : months;
  doc.querySelector(".days").innerHTML = days < 10 ? '0' + days : days;
  doc.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours;
  doc.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;

  // If the countdown is over
  if (diff <= 0) {
    clearInterval(countdown);
    doc.querySelector(".countdown").innerHTML = 'Merry Christmas';
  }
}, 1000); // Update every second



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function showSlide(index) {
      const offset = -index * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


