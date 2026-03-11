const container = document.querySelector('.container');
const text = document.getElementById('text');

function resizeText() {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Set font-size as a percentage of the smaller dimension
  const fontSize = Math.min(containerWidth, containerHeight) * 0.3; // 30% of width/height
  text.style.fontSize = fontSize + 'px';
}

// Run on load and when window resizes
window.addEventListener('resize', resizeText);
resizeText();
