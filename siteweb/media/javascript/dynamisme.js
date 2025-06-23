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
// additionne les elements de classe article et change le total (page panier)
function updateprice() {
    const elements = document.getElementsByClassName("article");
    let total = 0;
    for(let i = 0; i < elements.length; i++) {
        total += parseFloat(elements[i].textContent);
    }
    document.getElementById("addition").textContent = "Total : " + total.toFixed(2) + " €";
}
// calcule le prix en fonction de la quantité (spécifications + panier)
function calculPrix(identifiant, needupdateprice) {
    // le prix unitaire vaut 5.50 € par défaut, change dans la page spécificités selon le nb de personnes
    let prix = 10;
    let numberpersons = document.getElementById("nbpersonnes").value;
    prix = numberpersons/4*10;
    console.log(prix);

    let quantity = document.getElementById(identifiant).value;
    document.getElementById("total").textContent= (quantity * prix).toFixed(2) + " €";
    // si needupdateprice === 1, on est dans la page panier et on update le total
    if (needupdateprice == 1) {
        updateprice();
    }
}

// reset quantity value (spécifications)
function resetquantity() {
    localStorage.clear('quantity');
}
// set value (of quantity - spécifications)
function registerQuantity (idqte) {
    let number = document.getElementById(idqte).value;
    localStorage.setItem('quantity', number);
    console.log("quantitée enregistrée : " + number)
}
// get the value (of quantity - panier)
function getquantity(wheretoplace) {
    qte = localStorage.getItem('quantity'); 
    console.log(qte);
    document.getElementById(wheretoplace).value = qte;
    calculPrix('quantite', '1');
}