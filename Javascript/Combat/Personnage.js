//niveau max : 55
//2 monstres par niveau qui se succède
//1 monstre donne 50exp quelque soit le niveau
//on level up après avoir tué les deux monstres
//Pour combattre besoin d'un équipement de niveau supérieur
//chaque type d'équipement s'améliore 10 fois niveau (équipement cuir disponible niveau 10, fer1 niveau 20, etc..)
//Equipement supérieur se débloque après avoir fini l'équipement inférieur


class Personnage{  
    constructor(){
        this.level = 1;
        this.hp = 100;
        this.dommage = 3;
        this.armure = 0;
        this.experienceActuel = 0;
        this.experiencePourUp = 100;
    }

    get level(){
        return this._level;
    }

    get hp(){
        return this._hp;
    }

    get dommage(){
        return this._dommage;
    }

    get experienceActuel(){
        return this._experienceActuel;
    }

    get experiencePourUp(){
        return this._experiencePourUp;
    }

    set level(Level) {
            this._level = Level;       
    }

    set hp(hp){
        this._hp = hp;
    }

    set dommage(dmg){
        this._dommage = dmg;
    }

    set experienceActuel(exp){
        this._experienceActuel = exp;
    }

    set experiencePourUp(exp){
        this._experiencePourUp = exp;
    }

}