$('document').ready(function(){
    if(localStorage.getItem("dommage")){
        hero.dommage = parseInt(localStorage.getItem("dommage"));
        console.log(typeof(hero.dommage));
    }
    if(localStorage.getItem("armure")){
        hero.armure = parseInt(localStorage.getItem("armure"));
        console.log(typeof(hero.armure));
    }
    if(localStorage.getItem("level")){
        hero.level = parseInt(localStorage.getItem("level"));
        console.log(typeof(hero.level));
    }
    if(localStorage.getItem("experienceActuel")){
        hero.experienceActuel = parseInt(localStorage.getItem("experienceActuel"));
        console.log(typeof(hero.experienceActuel));
    }
    if(localStorage.getItem("bois")){
        nombreDeBois = parseInt(localStorage.getItem("bois"));
        console.log(nombreDeBois);
    }
    if(localStorage.getItem("cuir")){
        nombreDeCuir = parseInt(localStorage.getItem("cuir"));
        console.log(nombreDeCuir);
    }
    if(localStorage.getItem("fer")){
        nombreDeFer = parseInt(localStorage.getItem("fer"));
        console.log(nombreDeFer);
    }

    if(localStorage.getItem("hache")){
        nbHache = parseInt(localStorage.getItem("hache"));
        document.getElementById('nbHache').innerHTML = nbHache;
        prixHache = 10*Math.pow(3,nbHache);
        boisParClick = Math.pow(2,nbHache);
        document.getElementById("prixHache").innerHTML = prixHache;
    }
    
    if(localStorage.getItem("bucheron")){
        nbBucheron = parseInt(localStorage.getItem("bucheron"));
        document.getElementById('nbBucheron').innerHTML = nbBucheron;
        prixBucheron = 1000*Math.pow(2,nbBucheron);
        autoBucheron = 5*nbBucheron;
        document.getElementById("prixBucheron").innerHTML = nbBucheron;
    }

    if(localStorage.getItem("couteau")){
        nbCouteau = parseInt(localStorage.getItem("couteau"));
        document.getElementById('nbCouteau').innerHTML = nbCouteau;
        prixCouteau = 10*Math.pow(3,nbCouteau);
        cuirParClick = Math.pow(2,nbCouteau);
        document.getElementById("prixCouteau").innerHTML = prixCouteau;
    }
    
    if(localStorage.getItem("tanneur")){
        nbTanneur = parseInt(localStorage.getItem("tanneur"));
        document.getElementById('nbTanneur').innerHTML = nbTanneur;
        prixTanneur = 1000*Math.pow(2,nbTanneur);
        autoTanneur = 5*nbTanneur;
        document.getElementById("prixTanneur").innerHTML = nbTanneur;
    }

    if(localStorage.getItem("marteau")){
        nbMarteau = parseInt(localStorage.getItem("marteau"));
        document.getElementById('nbMarteau').innerHTML = nbMarteau;
        prixMarteau = 10*Math.pow(3,nbMarteau);
        ferParClick = Math.pow(2,nbCouteau);
        document.getElementById("prixMarteau").innerHTML = prixMarteau;
    }
    
    if(localStorage.getItem("forgeron")){
        nbForgeron = parseInt(localStorage.getItem("forgeron"));
        document.getElementById('nbForgeron').innerHTML = nbForgeron;
        prixForgeron = 1000*Math.pow(2,nbForgeron);
        autoForgeron = 5*nbForgeron;
        document.getElementById("prixForgeron").innerHTML = nbForgeron;
    }    

})