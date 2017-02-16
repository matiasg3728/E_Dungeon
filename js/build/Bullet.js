/**
 * Created by matiasgarcia on 2/14/17.
 */
class Bullet extends Actor{
    constructor(){
        this.type="";
        this.dmg=0;
        this.speed=0;
        this.splits={
            split:false,
            amount:0
        }
    }

    getDmg(){
        return this.dmg;
    }
    getSpeed(){
        return this.speed;
    }

    morph(){
        switch(this.type){
            case "grunt":
                this.dmg=1;
                this.speed=1;
                break;
            case "captain":
                this.dmg=2;
                this.speed=1;
                break;
            case "turret":
                this.dmg=2;
                this.speed=1;
                break;
            case "sniper":
                this.dmg =5;
                this.speed=2;
                break;
            case "shotgunner":
                this.dmg=1;
                this.speed=1;

        }

    }


}