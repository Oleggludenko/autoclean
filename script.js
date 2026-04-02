function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
// ===== Лінії за курсором (анімовані градієнтні) =====
const linesCount = 10;
const lines = [];
const colors = [
  'rgba(255,0,150,0.8)',
  'rgba(255,100,0,0.8)',
  'rgba(0,200,255,0.8)',
  'rgba(0,255,100,0.8)',
  'rgba(255,255,0,0.8)'
];

for (let i = 0; i < linesCount; i++) {
  const line = document.createElement('div');
  line.classList.add('cursor-line');
  document.body.appendChild(line);
  lines.push({
    element: line,
    offsetX: Math.random() * 20 - 10,
    offsetY: Math.random() * 20 - 10,
    speed: 0.02 + Math.random() * 0.03
  });
}

document.addEventListener('mousemove', (e) => {
  lines.forEach((lineObj, index) => {
    const { element, offsetX, offsetY, speed } = lineObj;
    const time = Date.now() * speed;
    const swayX = Math.sin(time + index) * 20;
    const swayY = Math.cos(time + index) * 20;
    element.style.transform = `translate(${e.clientX + offsetX + swayX}px, ${e.clientY + offsetY + swayY}px)`;
    element.style.background = `linear-gradient(180deg, ${colors[index % colors.length]}, rgba(0,0,0,0))`;
  });
});
