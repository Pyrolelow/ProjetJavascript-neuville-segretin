$('document').ready(function() {

$('body').ready(function(){
    let ctx = document.getElementById('fight').getContext('2d');
    let combatBackground = document.getElementById('background');
    let ennemi = document.getElementById('ennemi');
    let personnage = document.getElementById('personnage');

    combatBackground.onload = function(){
        
        ctx.drawImage(combatBackground,0,0,1280,720);
        


        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(70, 70, 350, 20);

        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(70, 70, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(70, 70, 350, 20);

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(850, 70, 350, 20);

        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(850, 70, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(850, 70, 350, 20);

        ctx.drawImage(ennemi,935,320,220,300)

        ctx.drawImage(personnage,120,330,200,250)

        window.setInterval( function() {
            combat();
        },1000);
    }
    
    
});









});