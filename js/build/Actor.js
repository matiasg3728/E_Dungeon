
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
