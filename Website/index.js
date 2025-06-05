
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel() {
  const width = items[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


function togglePopup() {
  const overlay = document.getElementById('popupOverlay');
  overlay.classList.toggle('show');
}

function toggleSecondPopup(text = null) {
const overlay = document.getElementById('secondPopupOverlay');
const textBox = document.getElementById('secondPopupText');

if (text) {
textBox.textContent = text;
}

overlay.classList.toggle('show');
}