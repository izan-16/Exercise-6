function listenOnHamburguer() {
    const hamburguer = document.getElementById("hamburguer");
    hamburguer.addEventListener("click", showOrHideHamburguer);
}

function showOrHideHamburguer() {
    console.log("pasó por aquí")
    const responsiveMenu = document.getElementById("responsive-menu");
    responsiveMenu.classList.toggle("open");
}

listenOnHamburguer();