// ===== Carrossel Automático =====
document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let current = 0;

  // exibe a primeira imagem
  images[current].classList.add('active');

  // botões de navegação
  const prevBtn = carousel.querySelector('.carousel__prev');
  const nextBtn = carousel.querySelector('.carousel__next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      images[current].classList.remove('active');
      current = (current - 1 + images.length) % images.length;
      images[current].classList.add('active');
    });

    nextBtn.addEventListener('click', () => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    });
  }

  // autoplay a cada 4 segundos
  const autoplay = carousel.dataset.autoplay === "true";
  if (autoplay && images.length > 1) {
    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 4000);
  }
});

// ===== Animação de scroll suave (reveal) =====
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) el.classList.add('in');
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Barra de progresso =====
const progressBar = document.querySelector('.progress__bar');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (scroll / height) * 100;
  progressBar.style.width = percent + '%';
});
