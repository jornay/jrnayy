let currentScene = 0;
const loveSound = document.getElementById("loveSound");
const music = document.getElementById("music");

function moveScene(direction) {
    const slider = document.querySelector(".slider");
    const totalScenes = document.querySelectorAll(".scene").length;
    
    currentScene += direction;
    
    if (currentScene < 0) {
        currentScene = totalScenes - 1;
    } else if (currentScene >= totalScenes) {
        currentScene = 0;
    }

    slider.style.transform = `translateX(-${currentScene * 100}vw)`;
}

// Efek hujan love saat tombol ditekan
function showLove() {
    for (let i = 0; i < 10; i++) {
        let love = document.createElement("div");
        love.classList.add("love");
        love.innerHTML = "❤️";
        love.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 3000);
    }
    loveSound.play();
}

// Putar musik romantis saat tombol ditekan
function playMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Tampilkan kejutan hadiah di level terakhir
function showSurprise() {
    alert("i love u sayangggku cintakuuu duniakuuu semestakuuu 💞💞💞💞💞💞💞💞💞💞💞💞💞");
}
