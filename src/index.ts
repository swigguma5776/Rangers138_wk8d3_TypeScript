
// test function
// function sayHello(name:string):void {
    
//     console.log(`Hello there, ${name}. How goes it`)
// }

// sayHello('William')



//noImplicitAny
//Recommended: true 


// function noImplicitAny(name):void {
//     console.log('Hey there', name)
// }


//noImplicitReturns
//Recommended: true

// function noImplicitReturns(id: string | number ): unknown {
    
//     if (typeof id === 'number'){
//         return id
//     }
//     // return 123
    
// }


//noUnusedLocals
//Recommneded: true


// function noUnusedLocals(id: number):void {
//     let unused = 5
//     console.log(id)
// }


//noUnusedParameters
//Recommended: true

// function noUnusedParameters(id: number): void {
//     console.log('Hey there')
// }

//strictNullChecks
//Recommended: true

// function strictNullChecks(id: number): void {
//     console.log('The value is:', id)
// }

// strictNullChecks(null)


//allowUnreachableCode
//Recommended: false

// function allowUnreachableCode(id: number): number {
    
//     return id
//     if (typeof id === 'number'){
//         console.log('This is my id', id)
//     }
// }


//noImplicitOverride
//Recommended: true


// class Parent {
    
    
//     doSomething():string {
//         return 'Hey there how are you doing today'
//     }
// }


// class Child extends Parent {
    
//     doSomething():string {
//         return 'Idk Im doing alright but ya know, could be better. But the weaather is nice.'
//     }
// }

/**
 * 
 * 
 * PRETEND THIS IS THE TOP OF THE FILE
 * 
 */


import { Circle, Square, Triangle} from './shapes';


let myCircle = new Circle(5)
console.log(myCircle.calculateArea())


let mySquare = new Square(10)
console.log(mySquare.calculateArea())


let myTriangle = new Triangle(10)
console.log(myTriangle.calculateArea())




