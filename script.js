// Pesan cinta spesial untuk Nadyaaa
const messages = [
    "cintaku ke kamu adalah cinta paling ikhlas, aku mencintaimu bukan karena siapa kamu, tapi karna itu kamu",
    "hai sayang gimana hari ini apakah ada yang ingin diceritakan? aku sangat ingin mendengar cerita dari kamuuu",
    "aku minta maff karena selalu minta yang aneh² ke kamuuuu :(",
    "kamu jangan lupa jaga kesehatan yaaaaa ><",
    "Kamu adalah alasan aku tersenyum setiap hari, nadyaaa 💖"
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
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Buat hati secara berkala
setInterval(createHeart, 500);

// Musik latar
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸️ Jeda Musik";
    } else {
        music.pause();
        musicButton.textContent = "🎶 Putar Musik";
    }
});
