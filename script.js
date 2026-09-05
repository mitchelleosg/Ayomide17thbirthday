const opening = document.getElementById("opening");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

const giftBtn = document.getElementById("giftBtn");
const finalMessage = document.getElementById("finalMessage");
const gift = document.getElementById("gift");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

// ================= OPEN WEBSITE =================

openBtn.addEventListener("click", () => {
  opening.classList.add("hide");

  document.body.classList.remove("locked");

  music
    .play()
    .then(() => {
      musicBtn.textContent = "🔊";
    })
    .catch(() => {
      musicBtn.textContent = "🔇";
    });

  createHearts();
});

// ================= MUSIC =================

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicBtn.textContent = "🔊";
  } else {
    music.pause();

    musicBtn.textContent = "🔇";
  }
});

// ================= GIFT =================

giftBtn.addEventListener("click", () => {
  gift.style.display = "none";

  giftBtn.style.display = "none";

  finalMessage.classList.add("show");

  launchConfetti();
});

// ================= PHOTO LIGHTBOX =================

const photos = document.querySelectorAll(".photo-card img");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.src;

    lightbox.classList.add("show");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = ["❤️", "💕", "💗", "💖", "✨"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 15 + 12 + "px";

    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 700);
}

// ================= CONFETTI =================

function launchConfetti() {
  const symbols = ["🎉", "🎊", "❤️", "✨", "💖", "🎂"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");

    confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";

    confetti.style.fontSize = Math.random() * 20 + 12 + "px";

    confetti.style.zIndex = "100000";

    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;

    confetti.animate(
      [
        { transform: "translateY(0) rotate(0deg)" },
        { transform: `translateY(110vh) rotate(${Math.random() * 720}deg)` },
      ],
      {
        duration: duration * 1000,
        easing: "ease-out",
      },
    );

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// ================= START LOCKED =================

document.body.classList.add("locked");
