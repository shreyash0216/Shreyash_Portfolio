// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.padding = '0.5rem 0';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    navbar.style.padding = '0';
  }
});

// Mobile Menu Toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Subtle Mouse Glow Follow
const glow = document.querySelector('.glow-effect');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Update glow position smoothly
  // Note: Using a slight offset to center it
  if (window.innerWidth > 768) {
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.transform = 'translate(-50%, -50%)';
  }
});

// Smooth reveal on scroll (very subtle)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  // observer.observe(section); // Uncomment if reveal animation is needed later
});

// Handle Resume Download (Placeholder logic)
const resumeBtn = document.querySelector('.btn-outline');
if (resumeBtn) {
  resumeBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    // window.open('path/to/resume.pdf', '_blank');
    console.log('Resume download requested');
  });
}
// GitHub Contribution Grid population
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('contributionGrid');
  if (grid) {
    for (let i = 0; i < 60; i++) {
      const cell = document.createElement('div');
      cell.className = 'contribution-cell';
      const rand = Math.random();
      if (rand > 0.9) cell.classList.add('level-4');
      else if (rand > 0.8) cell.classList.add('level-3');
      else if (rand > 0.6) cell.classList.add('level-2');
      else if (rand > 0.4) cell.classList.add('level-1');
      grid.appendChild(cell);
    }
  }
});
