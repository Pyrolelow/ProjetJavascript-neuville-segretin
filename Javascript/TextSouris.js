function displayDivInfo(text){
    if(text){
        //Détection du navigateur
        is_ie = (navigator.userAgent.toLowerCase().indexOf("msie") != -1) && (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
         
        //Création d'une div provisoire
        var divInfo = document.createElement('div');
        divInfo.style.position = 'absolute';
        document.onmousemove = function(e){
            x = (!is_ie ? e.pageX-window.pageXOffset : event.x+document.body.scrollLeft);
            y = (!is_ie ? e.pageY-window.pageYOffset : event.y+document.body.scrollTop);
            divInfo.style.left = x+15+'px';
            divInfo.style.top = y+15+'px';
            divInfo.style.backgroundColor = 'black';
            divInfo.style.color = 'white';
        }
        divInfo.id = 'divInfo';
        divInfo.innerHTML = text;
        document.body.appendChild(divInfo);
    }
    else{
        document.onmousemove = '';
        document.body.removeChild(document.getElementById('divInfo'));
    }
}



$('document').ready(function() {

    var plancheHache = $("#clickHache");
    var plancheBucheron = $("#clickBucheron");
    var plancheCouteau = $("#clickCouteau");
    var plancheTanneur = $("#clickTanneur");
    var plancheMarteau = $("#clickMarteau");
    var plancheForgeron = $("#clickForgeron");

    //Mouse over BOIS 
    plancheHache.mouseover(function(){
        displayDivInfo("Actuellement : " + boisParClick + " bois pour un click " + '<br/>' +
                        "Amélioration : " + boisParClick*2 + " bois pour un click");
    });
    plancheHache.mouseout(function(){
        displayDivInfo();
    });

    plancheBucheron.mouseover(function(){
        var bucheronAmelio = autoBucheron +5;
        displayDivInfo("Actuellement : " + autoBucheron + " bois pour un click " + '<br/>' +
                        "Amélioration : " + bucheronAmelio + " bois pour un click");
    });
    plancheBucheron.mouseout(function(){
        displayDivInfo();
    });


    //Mouse over CUIR
    plancheCouteau.mouseover(function(){
        displayDivInfo("Actuellement : " + cuirParClick + " bois pour un click " + '<br/>' +
                        "Amélioration : " + cuirParClick*2 + " bois pour un click");
    });
    plancheCouteau.mouseout(function(){
        displayDivInfo();
    });

    plancheTanneur.mouseover(function(){
        var tanneurAmelio = autoTanneur +5;
        displayDivInfo("Actuellement : " + autoTanneur + " bois pour un click " + '<br/>' +
                        "Amélioration : " + tanneurAmelio + " bois pour un click");
    });
    plancheTanneur.mouseout(function(){
        displayDivInfo();
    });

    //Mouse over FER
    plancheMarteau.mouseover(function(){
        displayDivInfo("Actuellement : " + ferParClick + " bois pour un click " + '<br/>' +
                        "Amélioration : " + ferParClick*2 + " bois pour un click");
    });
    plancheMarteau.mouseout(function(){
        displayDivInfo();
    });
    plancheForgeron.mouseover(function(){
        var forgeronAmelio = autoForgeron +5;
        displayDivInfo("Actuellement : " + autoForgeron + " bois pour un click " + '<br/>' +
                        "Amélioration : " + forgeronAmelio + " bois pour un click");
    });
    plancheForgeron.mouseout(function(){
        displayDivInfo();
    });



});

//<a href="#" onMouseOver="displayDivInfo('text affiché dans la div');" onMouseOut="displayDivInfo()">Afficher</a>