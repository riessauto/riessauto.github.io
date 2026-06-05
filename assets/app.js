document.addEventListener('DOMContentLoaded', () => {
  const b = document.querySelector('.menu');
  const l = document.querySelector('.links');

  if (b && l) {
    b.onclick = () => l.classList.toggle('open');
  }
});
