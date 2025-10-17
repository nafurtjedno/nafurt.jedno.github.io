// === Odpočítavanie ===
const weddingDate = new Date("May 1, 2026 15:00:00").getTime();

const countdownFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Matematika pre dni, hodiny, minúty a sekundy
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Vloženie do HTML a zabezpečenie dvojciferného formátu
  document.getElementById("countdown").innerHTML = `${days} dní ${String(
    hours
  ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  // Keď odpočítavanie skončí
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Sme už manželia!";
  }
}, 1000);

// === Kontrola Hesla ===

/**
 * Kontroluje zadané heslo a zobrazí/skryje súkromnú sekciu.
 * HESLO je nastavené na: "danieljanka2026"
 */
function checkPassword() {
  // NASTAVTE SI VLASTNÉ HESLO! Pre jednoduchosť použijeme lowercase
  const correctPassword = "danieljanka2026";

  const inputElement = document.getElementById("password-input");
  const privateSection = document.getElementById("private-content");
  const loginForm = document.getElementById("login-section");
  const errorMessage = document.getElementById("error-message");

  // Porovnanie
  if (inputElement.value.toLowerCase() === correctPassword) {
    // Správne heslo: skryje formulár a zobrazí súkromný obsah
    loginForm.style.display = "none";
    privateSection.style.display = "block";
    window.scrollTo({ top: privateSection.offsetTop, behavior: "smooth" }); // Scroll na novú sekciu
  } else {
    // Nesprávne heslo: zobrazí chybovú správu
    errorMessage.style.display = "block";
    inputElement.value = ""; // vyčistí zadané heslo
  }
}

// Spustenie odpočítavania hneď po načítaní
document.addEventListener("DOMContentLoaded", countdownFunction);

// === Funkcia pre Responzívne Menu (Hamburger) ===
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// === Funkcie pre Jednoduchý Galériový Kolotoč ===

function showImage(galleryId, index) {
  const gallery = document.getElementById(galleryId);
  const images = gallery.querySelectorAll(".gallery-image");

  // Skryť všetky obrázky
  images.forEach((img) => img.classList.remove("active-image"));

  // Zobraziť požadovaný obrázok
  if (images[index]) {
    images[index].classList.add("active-image");
    gallery.dataset.currentIndex = index; // Uložíme si aktuálny index
  }
}

function nextImage(galleryId) {
  const gallery = document.getElementById(galleryId);
  const images = gallery.querySelectorAll(".gallery-image");
  let currentIndex = parseInt(gallery.dataset.currentIndex) || 0;

  // Vypočíta nový index, ak príde na koniec, vráti sa na začiatok
  let nextIndex = (currentIndex + 1) % images.length;
  showImage(galleryId, nextIndex);
}

function prevImage(galleryId) {
  const gallery = document.getElementById(galleryId);
  const images = gallery.querySelectorAll(".gallery-image");
  let currentIndex = parseInt(gallery.dataset.currentIndex) || 0;

  // Vypočíta nový index, ak príde na začiatok, prejde na koniec
  let prevIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(galleryId, prevIndex);
}

// ... Zvyšné funkcie (toggleMenu, checkPassword, countdownFunction) zostávajú bez zmeny ...
