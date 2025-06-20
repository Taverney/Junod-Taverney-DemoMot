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
// calcule le prix en fonction de la quantité
function calculPrix(identifiant, is1true) {
    const prix = 5.50
    let inputContent = document.getElementById(identifiant).value;
    document.getElementById("total").textContent= (inputContent * prix).toFixed(2) + " €";

    if (is1true == 1) {
        updateprice();
    }
}
function savequantity(qte) {
    console.log("savequantity");;
    document.cookie = "quantity =" + document.getElementById(qte).value + ";";
    console.log(document.cookie);
}

// test
function getCookieByName(name) {
    console.log("reading cookie")
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    console.log(cookie);
    if (cookie.startsWith(name + "=")) {
      let cookievalue = cookie.substring(name.length + 1);
      console.log(cookievalue);
    }
  }
}
function trycookie() {
    console.log("cookie set")
    document.cookie = "username=JohnDoe";
    getCookieByName("username");
}
