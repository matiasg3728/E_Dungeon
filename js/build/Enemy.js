
class Enemy {


    constructor(x, y, type, grid) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.direction="n";
        this.bullet = new Bullet(this.x, this.y, this.type);
        this.bullet.morph();
    }

    getThis() {
        var a1 = [];
        a1.push(this.type);
        a1.push(this.x);
        a1.push(this.y);
        return a1;
    }


    //returns the distance between the actor and a point
    getDistance(pX, pY) {
        const dx = this.x - pX;
        const dy = this.y - pY;

        return Math.sqrt(dx * dx + dy * dy);
    }

    //there is a snake in my boot

    drawEnemy() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.grid.boxSize, this.grid.boxSize);
        ctx.fillStyle = '#ff2f34';
        ctx.fill();
    }



    move(playerX, playerY) {
        if(playerX === this.x || playerY ===this.y){

        }
        if(playerX > this.x){
            this.x+=1;
        }
    }
}