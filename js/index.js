(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by matiasgarcia on 2/14/17.
 */
var Bullet = function () {
    function Bullet(x, y, type, grid) {
        _classCallCheck(this, Bullet);

        this.x = x;
        this.y = y;
        this.grid = grid;
        this.type = type;
        this.dmg = 0;
        this.speed = 0;
        this.splits = {
            split: false,
            amount: 0
        };
    }

    _createClass(Bullet, [{
        key: "getThis",
        value: function getThis() {
            var a1 = [];
            a1.push(this.type);
            a1.push(this.x);
            a1.push(this.y);
            a1.push(this.dmg);
            a1.push(this.speed);
            a1.push(this.splits);
        }
    }, {
        key: "morph",
        value: function morph() {
            switch (this.type) {
                case 0:
                    this.dmg = 1;
                    this.speed = 2;
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
    }]);

    return Bullet;
}();

var Enemy = function () {
    function Enemy(x, y, type, grid) {
        _classCallCheck(this, Enemy);

        this.type = type;
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.direction = "n";
        this.bullet = new Bullet(this.x, this.y, this.type);
        this.bullet.morph();
    }

    _createClass(Enemy, [{
        key: "getThis",
        value: function getThis() {
            var a1 = [];
            a1.push(this.type);
            a1.push(this.x);
            a1.push(this.y);
            return a1;
        }

        //returns the distance between the actor and a point

    }, {
        key: "getDistance",
        value: function getDistance(pX, pY) {
            var dx = this.x - pX;
            var dy = this.y - pY;

            return Math.sqrt(dx * dx + dy * dy);
        }

        //there is a snake in my boot

    }, {
        key: "drawEnemy",
        value: function drawEnemy() {
            ctx.beginPath();
            ctx.rect(this.x * 20, this.y * 20, 20, 20);
            ctx.fillStyle = '#ff2f34';
            ctx.fill();
        }
    }, {
        key: "move",
        value: function move(playerX, playerY) {
            if (playerX === this.x || playerY === this.y) {}
            if (playerX > this.x) {
                this.x += 1;
            }
        }
    }]);

    return Enemy;
}();
/**
 * Created by matiasgarcia on 2/21/17.
 */


var Grid = function () {
    //what is passed in is the
    function Grid(length, cWidth, cHeight) {
        _classCallCheck(this, Grid);

        this.length = length;

        this.cHeight = cHeight;
        this.cWidth = cWidth;

        var p = this.cWidth % 10;
        this.cWidth -= p;
        p = this.cHeight % 10;
        this.cHeight -= p;

        this.grid = [0][0];
        this.boxSize = 0;
    }

    _createClass(Grid, [{
        key: "makeGrid",
        value: function makeGrid() {
            for (i = 0; i < this.length; i++) {
                for (j = 0; j < this.length; j++) {
                    this.grid[i][j] = [];
                }
            }
            //this.boxSize = this.length/size;
        }
    }, {
        key: "insert",
        value: function insert(obj) {}
    }]);

    return Grid;
}();

var Player = function () {

    /**
     *
     * Make is so every classes x and y are just indexes in the array,
     * to move them around the canvas accurately you can just multiply the
     * array indexes by the length of a grid piece(which should be a square)
     *
     */
    function Player(x, y, grid) {
        _classCallCheck(this, Player);

        this.hp = 10;
        this.grid = grid;
        this.x = x;

        this.y = y;
        this.weapon = "daisy_gun";
        this.vault_length = 2;
        this.movement = 1;
        this.direction = "n";
        this.movement_type = "walk";
        this.pockets = [];
        this.bullet = 0;
    }

    _createClass(Player, [{
        key: "getThis",
        value: function getThis() {
            var a1 = [];
            a1.push(this.x);
            a1.push(this.y);
            a1.push(this.movement);
            return a1;
        }
    }, {
        key: "drawPlayer",
        value: function drawPlayer() {
            //var img = new Image();
            //img.src = 'resources/player.png';
            // var pl = sprite({
            //     context: ctx,
            //     width:100,
            //     height:75,
            //     image:img
            // });

            ctx.beginPath();
            ctx.rect(this.x * 12, this.y * 12, 20, 20);
            ctx.fillStyle = '#000';
            ctx.fill();

            console.log("drawplayerB4render");
        }
    }, {
        key: "move",
        value: function move(keys) {
            // W
            if (keys[87]) {

                if (this.direction === "n" && this.y > 0) {
                    // if(this.y<this.grid[0][0].length){
                    this.y -= 1;
                    // }
                } else {
                    this.direction = "n";
                }
            }
            // A
            else if (keys[65]) {
                    if (this.direction === "w" && this.x > 0) {
                        //     if(this.y<this.grid[0][0].length)
                        this.x -= 1;
                        //}
                    } else {
                        this.direction = "w";
                    }
                }
                // S
                else if (keys[83]) {
                        if (this.direction === "s" && this.y < c.height) {
                            //if(this.y<this.grid[0][0].length) {
                            this.y += 1;
                            //}
                        } else {
                            this.direction = "s";
                        }
                    }
                    // D
                    else if (keys[68]) {
                            if (this.direction === "e" && this.x < c.width) {
                                //if (this.y < this.grid[0][0].length) {
                                this.x += 1;
                                //  }
                            } else {
                                this.direction = "e";
                            }
                        }
        }

        //You pass in the x and y values of what ever
        //and it will return a true or false

    }, {
        key: "isHit",
        value: function isHit() {}
    }]);

    return Player;
}();
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
var ctx = c.getContext('2d');
//An array to hold the boolean values for whether a key is down or not
var keys = [];

var gameGrid = new Grid(10, c.width, c.height);
gameGrid.makeGrid();
var enemy = new Enemy(0, 0, 1);
var player = new Player(10, 10);
animationCanvas();

//This is adding a boolean for whatever key is being pressed down
document.addEventListener('keydown', function (event) {
    keys[event.keyCode] = true;
});

//When the key is let up it stops listening
document.addEventListener('keyup', function (event) {
    keys[event.keyCode] = false;
});

//
// Use Path2d
//

function draw() {

    player.move(keys);
    ctx.clearRect(0, 0, c.width, c.height);
    player.drawPlayer();
    enemy.drawEnemy();
    console.log(keys);
}

var counter = 0;
var frame = 20;

function animationCanvas() {

    console.log("test");

    draw();
    window.requestAnimationFrame(animationCanvas);
}

},{}]},{},[1]);
