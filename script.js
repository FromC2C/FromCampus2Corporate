const texts = document.querySelectorAll('.carousel-text');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
let interval = setInterval(showNextText, 3000);

function showText(i) {
  texts[index].classList.remove('active');
  index = (i + texts.length) % texts.length;
  texts[index].classList.add('active');
}

function showNextText() {
  showText(index + 1);
}

function showPrevText() {
  showText(index - 1);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextText, 3000);
}

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  showNextText();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  showPrevText();
  resetInterval();
});


