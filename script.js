

/* ---------------------------------
   STEP 1: Animated Skill Progress Bars
----------------------------------- */
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && bar.style.width === '') {
      bar.style.width = bar.dataset.progress;
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);


/* ---------------------------------
   STEP 2: Contact Form Validation + localStorage
----------------------------------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields!');
      return;
    }

    const formData = { name, email, message };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to form-details.html
    window.location.href = 'details.html';
  });
}

// Display stored data on form-details.html
const formOutput = document.getElementById('formOutput');
if (formOutput) {
  const data = JSON.parse(localStorage.getItem('formData'));
  if (data) {
    formOutput.innerHTML = `
      <h2>Form Submission Details</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `;
  } else {
    formOutput.textContent = 'No data found!';
  }
}


/* ---------------------------------
   STEP 3: Open Projects Without <a> Tags
----------------------------------- */
document.querySelectorAll('.project-card').forEach(card => {
  const url = card.dataset.url; 
  if (url) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = url;
    });
  }
});


/* ---------------------------------
   STEP 4: HTML5 Canvas Drawing
----------------------------------- */
const canvas = document.getElementById('myCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(40, 50, 130, 80);
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText('Hello susmita ', 45, 90);
}


/* ---------------------------------
   STEP 5: Image Slider
----------------------------------- */
let current = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

if (nextBtn && prevBtn && slides.length > 0) {
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
}


/* ---------------------------------
   STEP 6: Dark / Light Mode Toggle with localStorage
----------------------------------- */
const body = document.body;
const themeBtn = document.getElementById('themeBtn');

let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.add('light');
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light')) {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}


/* ---------------------------------
   STEP 7: Back-to-Top Button
----------------------------------- */
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}






