$('document').ready(function() {

$('body').ready(function(){
    let ctx = document.getElementById('fight').getContext('2d');
    let combatBackground = document.getElementById('background');
    let ennemi = document.getElementById('ennemi');
    let personnage = document.getElementById('personnage');

    combatBackground.onload = function(){
        
        ctx.drawImage(combatBackground,0,0,1024,512);
        


        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 350, 20);

        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(10, 10, 350, 20);

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(664, 10, 350, 20);

        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(664, 10, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(664, 10, 350, 20);

        ctx.fillStyle = 'black';
        ctx.strokeRect(10, 10, 350, 20);

        ctx.drawImage(ennemi,744.5,260)

        ctx.drawImage(personnage,85,260,200,250)

        window.setInterval( function() {
            combat();
        },1000);
    }
    
    
});









});