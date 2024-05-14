document.addEventListener("DOMContentLoaded", function() {
  // Défilement fluide pour les liens de la barre de navigation
  smoothScroll();

  // Gestion des boutons "Lire l'article"
  setupReadButtons();

  // Initialisation de l'animation AOS
  AOS.init();

  // Fonction pour le défilement fluide des liens dans la barre de navigation
  function smoothScroll() {
      const links = document.querySelectorAll("nav ul li a");
      
      links.forEach(function(link) {
          link.addEventListener("click", function(event) {
              event.preventDefault(); 

              const targetId = this.getAttribute("href").substring(1);
              const targetSection = document.getElementById(targetId);

              if (targetSection) {
                  targetSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                  });
              }
          });
      });
  }

  // Fonction pour gérer les boutons "Lire l'article"
  function setupReadButtons() {
      const readButtons = document.querySelectorAll(".article_read_button");

      readButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              const article = this.parentElement;
              const articleDescription = article.querySelector(".article_description");

              if (articleDescription.style.display === "none" || articleDescription.style.display === "") {
                  articleDescription.style.display = "block";
                  this.textContent = "Réduire l'article";
              } else {
                  articleDescription.style.display = "none";
                  this.textContent = "Lire l'article";
              }
          });
      });
  }
});