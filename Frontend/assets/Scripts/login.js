const formulaire = document.getElementById('login-form');

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const messageError = document.querySelector('#error');

//----------RECUPERATION DES DONNEES D'ID----------//
    const user = {
        email: email.value,
        password: password.value
    }
    console.log(user);
    
    //--Soumission des datas et vérification si elles matchs avec celles de l'API--//
    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const data = await response.json();
           
            const token = data.token;
            localStorage.setItem('token', token);
            window.location.href='index.html'; 
        } 

        else {
            messageError.textContent = "Erreur dans l’identifiant ou le mot de passe.Veuillez contacter l'administrateur";
            alert("Echec de l'authentification");
        }   

    } catch (error) {
        console.log("Echec de l'authentification", error);
    }
});

