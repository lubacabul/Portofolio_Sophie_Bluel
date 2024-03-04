//-------------RECUPERATION DES APIs-------------//

const gallery = document.querySelector(".gallery");
const portfolio = document.querySelector("portfolio")
let works = [];
let categories = [];

function WorksImport() {
    fetch("http://localhost:5678/api/works")
        .then((res) => res.json())
        .then((data) => {
            works = data;
            generateWorks(works);
        });
}
WorksImport();

function categoriesImport() {
    fetch("http://localhost:5678/api/categories")
        .then((res) => res.json())
        .then((data) => {
            categories = data;
        });
}
categoriesImport();

//----------AFFICHAGE DES CATEGORIES ET PROJETS----------//
    //--Création de la gallerie de travaux--//

    function generateWorks(worksArray) {
        gallery.innerHTML = "";

        worksArray.forEach((work) => {

                //Création des élèments des figures (l'image et le titre de l'image)
                const figure = document.createElement("figure");
                gallery.appendChild(figure);
                figure.classList = work.category.name;
                figure.setAttribute("data-id", work.id);

                const img = document.createElement("img");
                img.src = work.imageUrl;
                img.alt = work.title;
                figure.appendChild(img);

                const figcaption = document.createElement("figcaption");
                figcaption.innerHTML = work.title;
                figure.appendChild(figcaption);
            });
        }

    //-- Fonction de filtrage selon les catégories--//
    const filters = document.querySelectorAll(".filter");

                //Selection de la div concernée pour les filtres//
                function worksFilter() {
                    filters.forEach((filter) => {
                        const filterValue = filter.textContent;

                        
                        filter.addEventListener("click", () => {
                            let filteredWorks = [];

                            //Création du filtre "Tous"
                            if (filterValue === "Tous") {
                                filteredWorks = works;

                            //Création des autres filtres
                            } else {
                                filteredWorks = works.filter(
                                    (work) => work.category.name === filterValue
                                );
                            }
                            generateWorks(filteredWorks);
                        });
                    });
                }
                worksFilter();