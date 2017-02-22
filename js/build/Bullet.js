/**
 * Created by matiasgarcia on 2/14/17.
 */
class Bullet{
    constructor(x,y,type,grid){
        this.x=x;
        this.y=y;
        this.grid=grid;
        this.type=type;
        this.dmg=0;
        this.speed=0;
        this.splits={
            split:false,
            amount:0
        }
    }
    getThis(){
        var a1=[];
        a1.push(this.type);
        a1.push(this.x);
        a1.push(this.y);
        a1.push(this.dmg);
        a1.push(this.speed);
        a1.push(this.splits);
    }

    morph(){
        switch(this.type) {
            case 0:
                this.dmg=1;
                this.speed=2;
                break;
            case 1:
                this.dmg = 1;
                this.speed = 1;
                break;
            case 2:
                this.dmg = 2;
                this.speed = 1;
                break;
            case 3:
                this.dmg = 2;
                this.speed = 1;
                break;
            case 4:
                this.dmg = 5;
                this.speed = 2;
                break;
            case 5:
                this.dmg = 1;
                this.speed = 1;
                this.splits.split = true;
                this.splits.amount = 3;
                break;

        }

    }


}