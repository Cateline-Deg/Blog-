const boutonTheme = document.querySelector("#bouton-theme");
const formulaire = document.querySelector("#formulaire-contact");
const champNom = document.querySelector("#nom");
const annee = document.querySelector("#annee");

// Année automatique
annee.textContent = new Date().getFullYear();

// Mode sombre
boutonTheme.addEventListener("click", function () {
    document.body.classList.toggle("mode-sombre");

    if (document.body.classList.contains("mode-sombre")) {
        boutonTheme.textContent = "Désactiver le mode sombre";
    } else {
        boutonTheme.textContent = "Activer le mode sombre";
    }
});



const recherche = document.querySelector("#recherche-articles");
const articles = document.querySelectorAll(".grille-articles article");

recherche.addEventListener("input", function () {
    const texteRecherche = recherche.value.toLowerCase();

    articles.forEach(function (article) {
        const titre = article.querySelector("h3").textContent.toLowerCase();

        if (titre.includes(texteRecherche)) {
            article.style.display = "flex";
        } else {
            article.style.display = "none";
        }
    });
});