// Array pesan romantis
const messages = [
    "Cinta sejati adalah ketika kamu melihat dunia dalam satu orang, dan satu orang dalam dunia.",
    "Aku mencintaimu bukan karena siapa kamu, tetapi karena siapa aku saat bersamamu.",
    "Setiap detik bersamamu adalah momen yang berharga.",
    "Kamu adalah alasan aku tersenyum setiap hari. 💕",
    "Cinta adalah bahasa hati yang hanya bisa dimengerti oleh mereka yang saling mencintai."
];

// Fungsi untuk menampilkan pesan romantis secara acak
document.getElementById("loveButton").addEventListener("click", function() {
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let messageElement = document.getElementById("message");
    
    messageElement.textContent = randomMessage;
    messageElement.style.opacity = "1";
});

// Fungsi untuk membuat hati berjatuhan
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Buat hati secara berkala
setInterval(createHeart, 500);
