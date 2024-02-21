"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = exports.Square = exports.Circle = void 0;
const uuid_1 = require("uuid");
//create 3 classes & export them 
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.id = (0, uuid_1.v4)(); //give it a unique id
    }
    calculateArea() {
        return parseFloat(((this.radius ** 2) * Math.PI).toFixed(2));
    }
}
exports.Circle = Circle;
class Square {
    constructor(length) {
        this.length = length;
        this.id = (0, uuid_1.v4)();
    }
    calculateArea() {
        return this.length ** 2;
    }
}
exports.Square = Square;
class Triangle {
    constructor(height) {
        this.height = height;
        this.id = (0, uuid_1.v4)();
    }
    calculateArea() {
        return Math.floor((this.height ** 2) / 2);
    }
}
exports.Triangle = Triangle;
