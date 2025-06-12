function showbig(link) {
    let image = document.getElementById("bigimage");
    image.src=link;
    image.classList.replace("hidden", "shown");
    image.classList.add("agrandie");
    
    let conteneur = document.getElementById("modale");
    conteneur.classList.add("fond");
    conteneur.classList.replace("hidden", "shown");

    let formulaire = document.getElementById("close");
    formulaire.classList.replace("hidden", "shown");

    let bouton = document.getElementById("button");
    bouton.classList.replace("hidden", "shown");
    bouton.classList.add("closebutton");
}

function hide() {
    let image = document.getElementById("bigimage");
    image.classList.replace("shown", "hidden");
    image.classList.remove("agrandie");
    
    let conteneur = document.getElementById("modale");
    conteneur.classList.remove("fond");
    conteneur.classList.replace("shown", "hidden");

    let formulaire = document.getElementById("close");
    formulaire.classList.replace("shown", "hidden");

    let bouton = document.getElementById("button");
    bouton.classList.replace("shown", "hidden");
    bouton.classList.remove("closebutton");
}