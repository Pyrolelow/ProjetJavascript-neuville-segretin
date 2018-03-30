$('document').ready(function(){
    $('#modeCombat').click(function(){
        localStorage.setItem("bois",nombreDeBois);
        localStorage.setItem("cuir",nombreDeCuir);
        localStorage.setItem("fer",nombreDeFer);
        localStorage.setItem("niveauEpeeBois",niv)
    })
})