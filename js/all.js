
class Actor{


	constructor(type, x, y){
        this.type=type;
		this.x=x;
		this.y=y;

	}

	getType(){
	    return this.type;
    }

	//Returns X value
	getX(){
		return this.x;
	}

	//Returns Y value
	getY(){
		return this.y;
	}

	//returns the distance between the actor and a point
	getDistance(pX,pY){
		const dx = this.x - pX;
    	const dy = this.y - pY;

    	return Math.sqrt(dx*dx + dy*dy);
	}
	//there is a snake in my boot

}

/**
 * Created by matiasgarcia on 2/14/17.
 */
class Bullet extends Actor{
    constructor(){
        this.type="";
        this.dmg=0;
        this.speed=0;
        this.splits=[];
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

class Player extends Actor{

	constructor(){
		this.this.ype ="";
		this.weapon= "daisy_gun";
		this.vault_length= 2;
		this.movement=1;
		this.movement_type="walk";
		this.pockets=[]
	}

}