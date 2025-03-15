// 10 yıl sonrasını belirle
const endDate = new Date();
endDate.setFullYear(endDate.getFullYear() + 10); // 10 yıl sonrasına ayarlıyoruz

// Geri sayım için gereken öğe
const countdownElement = document.getElementById('countdown');
const explosionElement = document.getElementById('explosion');

// 3 dakika (180 saniye) sonra video gösterilecek
const videoDelay = 180000; // 3 dakika, milisaniye cinsinden

function updateCountdown() {
    const now = new Date();
    const remainingTime = endDate - now;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval); // Sayac durdurulacak
        countdownElement.textContent = "Bitti!";
        setTimeout(() => {
            explosionElement.style.display = "block"; // Video göster
        }, 3000); // Video gösterilmeden önce 3 saniye bekle
        return;
    }

    const years = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // Dakika hesaplama
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // Saniye hesaplama

    countdownElement.textContent = `Year: ${years} Month: ${months} Day: ${days} Hour: ${hours} Minute: ${minutes} Second: ${seconds}`;

    // 3 dakikalık geri sayımı başlat
    setTimeout(() => {
        explosionElement.style.display = "block"; // Video göster
    }, videoDelay);
}

// Her saniyede bir güncelleme yapacak
const countdownInterval = setInterval(updateCountdown, 1000);
