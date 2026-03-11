const container = document.querySelector('.navbar');
const text = document.getElementById('hometext');

function resizeText() {
  const containerHeight = container.clientHeight;

  // Set font-size as a percentage of navbar height
  const fontSize = containerHeight * 0.9; // 70% of navbar height
  text.style.fontSize = fontSize + 'px';
}

// Run on load and on window resize
window.addEventListener('load', resizeText);
window.addEventListener('resize', resizeText);
resizeText()
