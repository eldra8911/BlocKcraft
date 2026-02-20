// Copy IP
const copyBtn = document.getElementById("copyBtn");
const ipText  = document.getElementById("ip");

if (copyBtn && ipText) {
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(ipText.innerText);
        copyBtn.innerText = "Copié ! ✅";
        setTimeout(() => { copyBtn.innerText = "Copier l'IP"; }, 2000);
    });
}

// Fake Player Counter
const playerCount = document.getElementById("playerCount");
if (playerCount) {
    let target  = Math.floor(Math.random() * 150) + 50;
    let current = 0;
    const counter = setInterval(() => {
        current += 3;
        playerCount.innerText = current;
        if (current >= target) {
            playerCount.innerText = target;
            clearInterval(counter);
        }
    }, 20);
}

// Header glow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (!header) return;
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 24px rgba(0,0,0,0.6), 0 0 20px rgba(255,183,3,0.15)";
    } else {
        header.style.boxShadow = "0 2px 24px rgba(0,0,0,0.5)";
    }
});

// Cards reveal on scroll
const cards    = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity   = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => {
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s";
    observer.observe(card);
});
