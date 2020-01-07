let name = "Charan";
name = "Saran";
//here name value can be assigned with different value.
//Cannot be a reserved keyword
//Cannot start with a number (1name)
//Cannot contain a space or hypen(-)
// Are case-sensitive


const interestRate = 10;
//interestRate = 20;
//interestRate is a constant variable or fixed

//Two types of values we assign to variables(Primitive/Value Types and Reference Type)
let name = 'Mosh';  // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

//Reference Types Object, Array, Function

// Object means part of the representaion of

let person = {
    name : 'Mosh',          //here name and age are properties of object
    age : 30
};

// Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';     // here selection are dynamic so can select according to selection value

console.log(person.name);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;      //value can be added in an array
console.log(selectedColors.length);  // length is the array property


function greet(name, lastName){   //name is the parameter
    console.log('Hello' + name + ' ' + lastname)
}

greet('John', 'Suwal');   //here John is the argument

function square(number){
    return number * number;
}

console.log(square(2));     // here square function is called and prints  returned value. Here two function are called log and square.