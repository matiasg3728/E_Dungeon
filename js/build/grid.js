/**
 * Created by matiasgarcia on 2/21/17.
 */
class Grid{
    //what is passed in is the
    constructor(length, cWidth, cHeight){

        this.length= length;

        this.cHeight=cHeight;
        this.cWidth=cWidth;

        var p=this.cWidth%10;
        this.cWidth-=p;
        p=this.cHeight%10;
        this.cHeight-=p;


        this.grid = [];
        this.boxSize=0;
    }

    makeGrid(){
        console.log(this.grid);
        for(var row = 0; row < this.length; row++) {
            this.grid.push([]);
            for (var col = 0; col < this.length; col++){
                this.grid[row].push([]);
                this.grid[row][col].push([]);
            }
        }
        //this.boxSize = this.length/size;
    }
    drawGrid(){
        ctx.beginPath();
        
    }

    insert(row, col, obj){
        this.grid[row][col][0].push(obj);
    }
}