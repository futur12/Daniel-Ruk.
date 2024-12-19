// const speed =[Writer] Poet, Programmer, I speak four languages, I am a dancer,...],


// Les 6 textes que tu veux afficher
const texts = [
    "I'm a Writter.",
    "I'm passionate about coding.",
    "I'm always learning.",
    "I'm a problem solver.",
    "I'm Programmer",
    "I'm excited about new challenges.",
    "I speak four languages",
    "I'm a dancer",
    "I'm Poet."
];

const textContainer = document.getElementById('boucle');

let currentIndex = 0;  // L'indice du texte courant
let typingSpeed = 150;  // Vitesse de saisie (ms)
let eraseSpeed = 50;    // Vitesse d'effacement (ms)

function typeText(text, callback) {
    let i = 0;
    textContainer.textContent = '';  // Réinitialise le texte

    let interval = setInterval(() => {
        textContainer.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            callback();  // Appelle le callback une fois le texte écrit
        }
    }, typingSpeed);
}

function eraseText(callback) {
    let i = textContainer.textContent.length;

    let interval = setInterval(() => {
        textContainer.textContent = textContainer.textContent.slice(0, i - 1);
        i--;
        if (i === 0) {
            clearInterval(interval);
            callback();  // Appelle le callback une fois le texte effacé
        }
    }, eraseSpeed);
}

function changeText() {
    currentIndex = (currentIndex + 1) % texts.length;  // Change d'indice, cyclique entre 0 et 5

    setTimeout(() => {
        eraseText(() => {
            setTimeout(() => typeText(texts[currentIndex], () => {
                setTimeout(changeText, 200);  // Recommence après 11 secondes
            }), 100);  // Attendre un peu avant de commencer à taper
        });
    }, 500);  // Attendre avant de commencer à effacer
}

// Commencer l'animation avec le premier texte
typeText(texts[currentIndex], () => {
    setTimeout(changeText, 11000);  // Changer de texte après 11 secondes
});
