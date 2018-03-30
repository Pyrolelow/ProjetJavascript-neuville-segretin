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

    

})