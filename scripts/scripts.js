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




document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const progressBar = skill.querySelector('.progress');  // Sélectionne la barre de progression
        const percentage = skill.getAttribute('data-percent');  // Récupère le pourcentage

        // Applique la largeur de la barre en fonction du pourcentage
        progressBar.style.width = `${percentage}%`;
    });
});



document.getElementById('whatsapp-button').addEventListener('click', function() {
    // Replace with the target phone number (include country code)
    var phoneNumber = '+243972218023'; // Example phone number
    var url = `https://wa.me/${phoneNumber}`;
    
    // Open the WhatsApp chat link in a new tab or window
    window.open(url, '_blank');

});

document.getElementById('kali').addEventListener('click', function(){

    var ul=``;

    window.open(ul, 'blank');

});

document.getElementById('anne').textContent = new Date().getFullYear();

// document.addEventListener('DOMContentLoaded', () => {
//     // Sélectionner le conteneur des projets
//     const projectsContainer = document.querySelector('.projects-container');

//     // Ajouter la classe "scrolling" pour activer l'animation automatique
//     projectsContainer.classList.add('scrolling');

    // Facultatif : ajouter des boutons pour contrôler le défilement manuellement
    // L'événement de défilement manuel par clic sur des boutons (si tu veux)
//     const nextButton = document.createElement('button');
//     nextButton.textContent = '→';
//     nextButton.style.position = 'sticky';
//     nextButton.style.right = '20px';
//     nextButton.style.top = '50%';
//     nextButton.style.fontSize = '2rem';
//     nextButton.style.zIndex = '10';
//     document.body.appendChild(nextButton);

//     const prevButton = document.createElement('button');
//     prevButton.textContent = '←';
//     prevButton.style.position = 'fixed';
//     prevButton.style.left = '20px';
//     prevButton.style.top = '50%';
//     prevButton.style.fontSize = '2rem';
//     prevButton.style.zIndex = '10';
//     document.body.appendChild(prevButton);

//     nextButton.addEventListener('click', () => {
//         projectsContainer.scrollBy({ left: 320, behavior: 'smooth' });
//     });

//     prevButton.addEventListener('click', () => {
//         projectsContainer.scrollBy({ left: -320, behavior: 'smooth' });
//     });
// });
