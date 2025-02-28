// Array pesan romantis
const messages = [
    "dihatimu aku ingin menjadi yang tetap, bukan sebagai puisi yang meratap, atau cerita asing yang tak ingin kau tatap",
    "hai sayanggg jangan lupa makan yaaaa dan jangan lupa solat💞",
    "kalo harimu berat kamu bisa cerita ke akuuuuu, aku selalu ingin mendengarkan kamu cerita dan mengeluh kepadaku",
    "kamu adalah alasan aku tersenyum setiap hari. 💕",
    "aku jrnayy akan selalu mencintaimu sampai kapanpun 💖"
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
