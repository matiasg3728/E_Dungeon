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

    var enemy = new Enemy(180,180,1, gameGrid);
    gameGrid.insert(3,3, enemy);

    var player = new Player(0,0, gameGrid);
    gameGrid.insert(0,0,player);
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
    gameGrid.drawGrid();
    player.drawPlayer();
    enemy.drawEnemy();
}



function animationCanvas(){

    draw();
    window.requestAnimationFrame(animationCanvas);
}
