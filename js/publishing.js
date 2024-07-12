function moveToSection(index) {
  const sections = document.querySelector('.sections');
  sections.style.transform = `translateX(-${index * 100}vw)`;
}
