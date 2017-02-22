
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


