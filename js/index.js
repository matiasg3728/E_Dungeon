(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function () {
	function Actor(ptype, pX, pY) {
		_classCallCheck(this, Actor);

		this.type = pType;
		this.x = pX;
		this.y = pY;
	}

	//Returns X value


	_createClass(Actor, [{
		key: "getX",
		value: function getX() {
			return this.x;
		}

		//Returns Y value

	}, {
		key: "getY",
		value: function getY() {
			return this.y;
		}

		//returns the distance between the actor and a point

	}], [{
		key: "getDistance",
		value: function getDistance(pX, pY) {
			var dx = this.x - pX;
			var dy = this.y - pY;

			return Math.sqrt(dx * dx + dy * dy);
		}
		//there is a snake in my boot

	}]);

	return Actor;
}();

var Player = function (_Actor) {
	_inherits(Player, _Actor);

	function Player() {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

		var weapon = "daisy_gun";
		var vault_length = 2;
		var movement = 1;
		var movement_type = "walk";
		var pockets = [];
		return _this;
	}

	return Player;
}(Actor);

},{}]},{},[1]);
