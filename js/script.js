document.addEventListener('DOMContentLoaded', () => {


/* ================= MENU HAMBURGUESA ================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


if (hamburger && navLinks) {
hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}


/* ================= MODO OSCURO / CLARO ================= */
const themeToggle = document.getElementById("themeToggle");


if (themeToggle) {
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("light");
themeToggle.textContent =
document.body.classList.contains("light") ? "🌞" : "🌙";
});
}


/* ================= GALERIA (OPCIÓN 2) ================= */
const gallery = document.getElementById('gallery');


const totalImages = 54;
const imagePath = '/img/torneos/2026/1erfecha/';


for (let i = 1; i <= totalImages; i++) {
const img = document.createElement('img');
img.src = `${imagePath}tr (${i}).jpeg`;
img.alt = `Evento ${i}`;
gallery.appendChild(img);
}


/* ================= LIGHTBOX ================= */
const images = Array.from(document.querySelectorAll('.gallery-row img'));
const lightbox = document.getElementById('lightbox');


if (!images.length || !lightbox) return;


const lightboxImg = lightbox.querySelector('.lightbox-img');
const btnClose = lightbox.querySelector('.lightbox-close');
const btnPrev = lightbox.querySelector('.lightbox-prev');
const btnNext = lightbox.querySelector('.lightbox-next');


let currentIndex = 0;


function openLightbox(index) {
currentIndex = index;
lightboxImg.src = images[currentIndex].src;
lightbox.classList.add('active');
}


function closeLightbox() {
lightbox.classList.remove('active');
}


function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
lightboxImg.src = images[currentIndex].src;
}


function prevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
lightboxImg.src = images[currentIndex].src;
}


images.forEach((img, index) => {
img.addEventListener('click', () => openLightbox(index));
});


btnClose.addEventListener('click', closeLightbox);
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


lightbox.addEventListener('click', (e) => {
if (e.target === lightbox) closeLightbox();
});


document.addEventListener('keydown', (e) => {
if (!lightbox.classList.contains('active')) return;


if (e.key === 'Escape') closeLightbox();
if (e.key === 'ArrowRight') nextImage();
if (e.key === 'ArrowLeft') prevImage();
});


});