document.addEventListener('mousemove', e => {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = `${e.pageX}px`;
  s.style.top = `${e.pageY}px`;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 600);
});
