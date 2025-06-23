// change la source de l'image cachée 
// et change les classes des éléments pour les rendre visibles
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
// l'inverse de haut dessus
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


// calcul effectué sur la page panier
function calculpanier() {
    let numberpersons = document.getElementById("nbpersonnes").value;
    let quantity = document.getElementById("quantite").value;
    let prix = numberpersons/4*10;

    document.getElementById("total").textContent= (quantity * prix).toFixed(2) + " €";

    // calcule le total à partir des sous-totaux des éléments du panier, les éléments possèdent la classe "article"
    const elements = document.getElementsByClassName("article");
    let total = 0;
    for(let i = 0; i < elements.length; i++) {
        total += parseFloat(elements[i].textContent);
    }
    document.getElementById("addition").textContent = "Total : " + total.toFixed(2) + " €";
}
// calcul effectué sur la page spécificités
function calculspec() {
    let prix = 10;
    let numberpersons = document.getElementById("nbpersonnes").value;
    let quantity = document.getElementById("quantite").value;

    prix = numberpersons/4*10;
    document.getElementById("price").textContent= (prix).toFixed(2) + " €";
    document.getElementById("total").textContent= (quantity * prix).toFixed(2) + " €";
}

// reset quantity and nbpersons values (spécifications)
function resetdatas() {
    localStorage.clear('quantity');
    localStorage.clear('parts');
}
// register the value and quantity (spécifications)
function registerspec() {
    let number = document.getElementById("quantite").value;
    let parts = document.getElementById("nbpersonnes").value;
    localStorage.setItem('parts', parts);
    localStorage.setItem('quantity', number);
}
// get the quantity and nbpersons values (panier)
function getquantity() { 
    document.getElementById("quantite").value = localStorage.getItem('quantity');
    document.getElementById("nbpersonnes").value = localStorage.getItem('parts');
    calculpanier();
}