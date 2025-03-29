// ========== Efek Fade-in Saat Halaman Dimuat ==========
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("show");

    // Efek Fade-in untuk Elemen dengan Kelas 'fade-in-left' dan 'fade-in-right'
    let fadeElements = document.querySelectorAll(".fade-in-left, .fade-in-right");
    fadeElements.forEach((el) => {
        el.classList.add("show");
    });
});

// ========== Efek Navbar Berubah Warna Saat Scroll ==========
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#3a2b24";
    } else {
        navbar.style.background = "#4a3f35";
    }
});

// ========== Animasi Slider Gambar di Hero Section ==========
let slider = document.querySelector(".hero-slider");
let slides = slider.querySelectorAll("img");
let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik

// ========== Efek Hover untuk Ikon Media Sosial ==========
let socialIcons = document.querySelectorAll(".social-icons img");

socialIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        icon.style.animation = "shake 0.3s ease-in-out";
    });

    icon.addEventListener("mouseout", () => {
        icon.style.animation = "none";
    });
});
