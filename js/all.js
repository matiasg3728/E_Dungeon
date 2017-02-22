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

class Enemy {


    constructor(x, y, type, grid) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.grid=grid;
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
        ctx.rect(this.x * 20, this.y * 20, 20, 20);
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

class Player {

    /**
     *
     * Make is so every classes x and y are just indexes in the array,
     * to move them around the canvas accurately you can just multiply the
     * array indexes by the length of a grid piece(which should be a square)
     *
     */
	constructor(x,y, grid){

        this.hp = 10;
        this.grid = grid;
        this.x=x;
		this.y=y;
		this.weapon= "daisy_gun";
		this.vault_length= 2;
		this.movement= 1;
		this.direction= "n";
		this.movement_type= "walk";
		this.pockets= [];
        this.bullet= 0;

	}
	getThis() {
        var a1 = [];
        a1.push(this.x);
        a1.push(this.y);
        a1.push(this.movement);
        return a1;
    }


    drawPlayer(){
        //var img = new Image();
        //img.src = 'resources/player.png';
        // var pl = sprite({
        //     context: ctx,
        //     width:100,
        //     height:75,
        //     image:img
        // });

        ctx.beginPath();
        ctx.rect(this.x, this.y ,this.grid.cWidth/this.grid.length , this.grid.cWidth/this.grid.length);
        ctx.fillStyle ='#000';
        ctx.fill();
    }
    move(keys){
        if(this.x >= this.grid.cWidth){
            this.x = this.grid.cWidth - 60;
        }
        if(this.y >= this.grid.cHeight){
            this.y = this.grid.cHeight - 60;
        }
        if(this.x <= 0){
            this.x = 0;
        }
        if(this.y <= 0){
            this.y =0;
        }



        // W
            if (keys[87]) {


                if (this.direction === "n" && this.y > 0) {
                    // if(this.y<this.grid[0][0].length){
                    this.y-=1*(this.grid.cWidth/this.grid.length);
                    //console.log(this.grid.cWidth / this.grid.length);
                    // }
                }
                else {
                    this.direction = "n";
                }
            }
            // A
            else if (keys[65]) {
                if (this.direction === "w" && this.x > 0) {
                    //     if(this.y<this.grid[0][0].length)
                    this.x -= 1 * (this.grid.cWidth / this.grid.length);
                    //}
                }
                else {
                    this.direction = "w";
                }
            }
            // S
            else if (keys[83]) {
                if (this.direction === "s" && this.y < this.grid.cHeight) {
                    //if(this.y<this.grid[0][0].length) {
                    this.y += 1 * (this.grid.cWidth / this.grid.length);
                    //}
                }
                else {
                    this.direction = "s";
                }
            }
            // D
            else if (keys[68]) {
                if (this.direction === "e" && this.x < this.grid.cWidth) {
                    //if (this.y < this.grid[0][0].length) {

                    this.x += 1 * (this.grid.cWidth / this.grid.length);

                    //  }
                }
                else {
                    this.direction = "e";
                }
            }

    }

//You pass in the x and y values of what ever
//and it will return a true or false
isHit(){

    }



}
// function sprite (options) {
//
//     var that = {};
//
//     console.log("sprite test 1");
//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;
//     var px= this.x;
//     var py= this.y;
//
//
//     that.render = function () {
//
//         // Draw the animation
//         that.context.drawImage(
//             that.image,
//             0,
//             0,
//             that.width,
//             that.height,
//             px,
//             py,
//             that.width,
//             that.height);
//     };
//
//     return that;
// }



/**
 * Created by matiasgarcia on 2/17/17.
 */

//This is the canvas
var c = document.getElementById("canvas");
//This is the context
var ctx= c.getContext('2d');
//An array to hold the boolean values for whether a key is down or not
var keys=[];

    var gameGrid = new Grid(10, c.width, c.height);
    gameGrid.makeGrid();
    var enemy = new Enemy(0,0,1);
    var player = new Player(0,0, gameGrid);
     animationCanvas();




    //This is adding a boolean for whatever key is being pressed down
    document.addEventListener('keydown', function(event){
        keys[event.keyCode]=true;
    });

    //When the key is let up it stops listening
    document.addEventListener('keyup', function(event){
        keys[event.keyCode]=false;
    });




//
// Use Path2d
//

var counter=0;
var frame=20;

function draw(){

    if(counter === 6) {
        player.move(keys);
        console.log(player.x+ " " + player.y);
        counter =0;
    }else{
        counter++;
    }

    ctx.clearRect(0,0,c.width,c.height);
    player.drawPlayer();
    enemy.drawEnemy();
}



function animationCanvas(){

    draw();
    window.requestAnimationFrame(animationCanvas);
}
