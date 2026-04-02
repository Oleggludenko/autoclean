function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
// ===== Лінії за курсором =====
const linesCount = 10;
const lines = [];

for (let i = 0; i < linesCount; i++) {
  const line = document.createElement('div');
  line.classList.add('cursor-line');
  document.body.appendChild(line);
  lines.push(line);
}

document.addEventListener('mousemove', (e) => {
  lines.forEach((line, index) => {
    const offset = index * 15; // відставання ліній
    line.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
  });
});
