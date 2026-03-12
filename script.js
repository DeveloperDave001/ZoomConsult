function go(e, hash) {
  e.preventDefault();
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  closeMob();
}

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('shadow', scrollY > 10));

function openMob() { 
  document.getElementById('mobMenu').classList.add('open'); 
}

function closeMob() { 
  document.getElementById('mobMenu').classList.remove('open'); 
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('visible'); 
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const txt = document.getElementById('submitText');
  btn.style.background = '#1b6b2f';
  txt.textContent = 'Message sent ✓';
  setTimeout(() => { 
    btn.style.background = ''; 
    txt.textContent = 'Send message'; 
  }, 3500);
}
