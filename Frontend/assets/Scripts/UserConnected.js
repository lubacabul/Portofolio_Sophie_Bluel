// Création de la fonction pour vérifier si l'utilisateur est connecté
async function checkUserConnected () {
    const token = localStorage.getItem('token');
    /* Vérification présence token
       console.log(token);
    */
   const userConnected = token != null && token != undefined && token != '';

   if (userConnected) {
      // Si l'utilisateur est connecté 
      const loginLink = document.querySelector(".login__link");
      loginLink.textContent = "logout";
      loginLink.addEventListener("click", userLogOut);

   } else {
      // Si l'utilisateur est déconnecté
      const loginLink = document.querySelector(".login__link");
      loginLink.textContent = "login";
   }
}

// Fonction de déconnexion
async function userLogOut() {
   // Nettoyage du localStorage
   localStorage.clear();
   // Rechargement de la page 
   window.location.reload();
}