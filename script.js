const sections = document.querySelectorAll('.scrollSpy');
const navLinks = document.querySelectorAll('.links');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const sectionId = entry.target.getAttribute('id');
    const link = document.querySelector(`.links[href="#${sectionId}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
(function loadFontAwesome() {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/bc93cf7741.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();