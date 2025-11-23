function scrollToRoster() {
  const rosterSection = document.getElementById('roster-section');
  if (rosterSection) {
    const elementPosition = rosterSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-element').forEach(el => {
  observer.observe(el);
});