const galeria = document.getElementById('galeria');

let isDown = false;
let startX;
let scrollLeft;

// Mouse
galeria.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - galeria.offsetLeft;
  scrollLeft = galeria.scrollLeft;
  galeria.classList.add('active');
});
galeria.addEventListener('mouseleave', () => {
  isDown = false;
  galeria.classList.remove('active');
});
galeria.addEventListener('mouseup', () => {
  isDown = false;
  galeria.classList.remove('active');
});
galeria.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - galeria.offsetLeft;
  const walk = (x - startX) * 2;
  galeria.scrollLeft = scrollLeft - walk;
});

// Touch
let touchStartX = 0;
let touchScrollLeft = 0;

galeria.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = galeria.scrollLeft;
});

galeria.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 1.5;
  galeria.scrollLeft = touchScrollLeft - walk;
});
