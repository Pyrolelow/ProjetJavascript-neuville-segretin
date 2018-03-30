class Monstre{
    constructor(){
        this.dmg = 1;
        this.hp = 100;
        this.experience = 50;
    }

    get dmg(){
        return this._dmg;
    }

    get hp(){
        return this._hp;
    }

    get experience(){
        return this._experience;
    }

    set dmg(dmg){
        this._dmg = dmg;
    }

    set hp(hp){
        this._hp = hp;
    }

    set experience(exp){
        this._experience = exp;
    }
}