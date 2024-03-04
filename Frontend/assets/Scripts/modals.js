
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Tout est prêt");
    initWorks();
  });

// Récupération des appels à l'API type "GET" et les initialise //
async function initWorks() {

     //Chargement des travaux de la modale//
    getModalWorks();

}

//----------GESTION DES MODALES----------//
    //--Ouverture et fermeture des modales--//

    const modalContainer = document.querySelector(".modal-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");

            //Déclenchement de la fermeture des modales pour chaque élèments avec la classe modal-trigger//
            modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

            //Passage de la class modal-container en "active" à chaque utilisation du trigger//
            function toggleModal(){
            modalContainer.classList.toggle("active")
            }

    //--Affichage des travaux pour la modale--// 

            // Gestion des appels à l'API//
            async function getModalWorks() {
                await fetch("http://localhost:5678/api/works")
                .then(response => response.json())
                .then(dataWorks => {
                    console.table(dataWorks);
                    const gallery = document.querySelector(".modal-gallery");
                    gallery.innerHTML = "";
                    dataWorks.forEach((work) => {

            // Création des éléments//
            const card = document.createElement("figure");
            const imgCard = document.createElement("img");

            //Récupération des infos//
            imgCard.src = work.imageUrl;
            imgCard.alt = work.title;
            imgCard.setAttribute('category', work.categoryId);
            card.appendChild(imgCard);
            gallery.appendChild(card);
            });
        });    
    };