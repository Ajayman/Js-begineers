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
    name : 'Mosh',
    age : 30
};

// Dot Notation
person.name = 'John';

//Bracket Notation
person['name'] = 'Mary';

console.log(person.name)