// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, options);
  sections.forEach(sec => observer.observe(sec));
  
  // Animate header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle recipe details
  document.querySelectorAll('.toggle-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      if(details.style.display === 'block'){
        details.style.display = 'none';
        btn.textContent = 'View Recipe';
      } else {
        details.style.display = 'block';
        btn.textContent = 'Hide Recipe';
      }
    });
  });
  
  // Contact form validation
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if(!name.value || !email.value || !message.value){
      alert('Please fill out all fields.');
      return;
    }
    alert('Thank you for reaching out! We will contact you soon.');
    e.target.reset();
  });