const colors = ['#6A0DAD', '#191970', '#8B0000', '#2a2f36', '#00FF9F'];

document.addEventListener('mousemove', e => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  const color = colors[Math.floor(Math.random() * colors.length)];
  sparkle.style.background = color;
  sparkle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 600);
});
