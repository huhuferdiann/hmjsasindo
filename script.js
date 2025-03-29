document.addEventListener("DOMContentLoaded", function() {
    let buku = document.querySelector('.buku');
    let suaraBukuBuka = document.getElementById("suara-buku-buka");
    let suaraBukuTutup = document.getElementById("suara-buku-tutup");

    // Saat mouse masuk (buku terbuka)
    buku.addEventListener("mouseenter", function() {
        suaraBukuBuka.currentTime = 0;
        suaraBukuBuka.play();
    });

    // Saat mouse keluar (buku tertutup)
    buku.addEventListener("mouseleave", function() {
        suaraBukuTutup.currentTime = 0;
        suaraBukuTutup.play();
    });

    // Console log untuk melihat interaksi
    console.log("Wah ada pengunjung nih. HALOOO!!!");
});
