window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Tout est prêt");
    initWorks();
  });

// Fonction qui récupère les appels à l'API type "GET" et les initialise //
async function initWorks() {

     // Utilisateur connecté
    checkUserConnected();

}

//-------------FONCTION ADMINISTRATION-------------//

async function checkUserConnected () {
    const token = localStorage.getItem('token');
 
   const userConnected = token != null && token != undefined && token != '';

   //--Si l'utilisateur est connecté--//
   if (userConnected) {
      
            //Affichage des éléments : barre d'édition, bouton "modifier" et suppression des filtres//
            const loginLink = document.querySelector(".login-link");
            loginLink.textContent = "logout";
            loginLink.addEventListener("click", userLogOut);
            
            blackBanner()
            
            const buttonModify = document.querySelector(".button-modify");
            buttonModify.style.display = 'block';

            const filtersSection = document.querySelector(".filter-container");
            filtersSection.style.display = 'none';

    // Si l'utilisateur est déconnecté //
    } else {
      
            //Suppression des élèments ajoutés pour la fonction admin//
            const loginLink = document.querySelector(".login-link");
            loginLink.textContent = "login";

            const buttonModify = document.querySelector(".button-modify");
            buttonModify.style.display = 'none';
        }
}

//Affichage du bandeau noir pour le mode édition//
function blackBanner() {
    const header = document.querySelector("header");
    const displayBlackBanner = document.createElement("div");
    header.appendChild(displayBlackBanner);
    displayBlackBanner.innerHTML = `
    <aside
      id="black-banner"
      class="black-banner"
      aria-hidden="true"
      role="dialog"
      aria-modal="false"
    >
      <div>
        <p> <i class="fa-regular fa-pen-to-square"></i> Mode édition </p>
      </div>
    </aside>
    `;
}

            // Fonction de déconnexion //
            async function userLogOut() {

            // Nettoyage du localStorage
            localStorage.clear();

            // Rechargement de la page 
            window.location.reload();
    }



