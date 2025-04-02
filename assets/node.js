// Learn More Button
document.getElementById("learnMore").addEventListener("click", function() {
  alert("Obrigado por querer saber mais!");
});

// Download CV
function baixarCurriculo() {
  const url = "https://drive.google.com/uc?export=download&id=1QjQ25i3nvMjlf5sRm1fd7CjnscSbCiyQ";
  window.open(url, "_blank");
}

// Open WhatsApp
function abrirWhatsApp() {
  const numero = "+5541987828512";
  const mensagem = "Olá Ronald, gostaria de trabalhar com você!";
  const url = `https://wa.me/${numero.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Carousel Logic
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  carouselInner.style.transition = 'transform 0.5s ease';
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});