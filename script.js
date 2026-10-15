// Variable and Data Types

//1 

var a = 10;
a=15;
var a = 20;
console.log("var a:", a); 

let b = 20;
b = 25;
//let b = 30; Error: Identifier 'b' has already been declared
console.log("let b:", b);

const c = 30;
// c = 35; // Error: Assignment to constant variable.
// const c = 40; // Error: Identifier 'c' has already been declared
console.log("const c:", c);

// 2

let  name = "Gowtham";
let age = 25;
let programmingKnowledge = true;

console.log("Name:",name, (typeof name));
console.log("Age:", age, (typeof age));
console.log("Programming Knowledge:", programmingKnowledge, (typeof programmingKnowledge));

// 3

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits:", fruits);
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);

//4

let person = {
    name: "Gowtham Bharathi T",
    role: "Java Full Stack Developer",
    CGPA: 9.5,
}
console.log("Name:", person.name);
console.log("Role:", person.role);
console.log("CGPA:", person.CGPA);

//5

let  name1 = prompt("Enter your name");
let age1 = prompt("Enter Your age");

alert("Welcome, " + name1);
console.log("Age:", age1);


// Operators

//6

let x = 10;
let y = 5;

addition = x + y;
subtraction = x - y;
multiplication = x * y;
division = x / y;
modulus = x % y;
exponentiation = x ** y;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

//7

let a1 = 5;
console.log(a1++);
console.log(a1);
console.log(++a1);

// 8

let a2 = 10;
let b2 = a2--;
let c2 = --a2;

console.log("a2:", a2);
console.log("b2:", b2);
console.log("c2:", c2);

// 9

let a3 = 10;

a3 += 10;
console.log("a3 +=:", a3);

a3 -= 10;
console.log("a3 -=:", a3);

a3 *= 10;
console.log("a3 *=:", a3);

a3 /= 10;
console.log("a3 /=:", a3);

a3 %= 10;
console.log("a3 %=", a3);
 
// 10

console.log(5 == "5"); 
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");

// 11

let age2 = 22;
let hasID = true;

console.log(age2 >= 18 && hasID);
console.log(age2 < 18 || hasID);
console.log(!hasID);
console.log(age2 < 18 && hasID);

// 12

let age3 = Number(prompt("Enter your age:"));

let result = age3 >= 18
    ? "You are eligible."
    : "You are not eligible.";

console.log(result);


// Type Casting and Conditions

// 13

console.log(typeof("hello" + 10));
console.log(typeof(10+true));
console.log(typeof(10+null));
console.log(typeof("hello"+undefined));

// 14

let number1 = Number(prompt("Enter a number:"));

let result1 = number1 + 10;

console.log("Result:", result1);

// 15

console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

// 16

let number2 = Number(prompt("Enter a number"));
if (number2 >= 0) {
    console.log("The number is positive.");
} else{
    console.log("The number is negative.");
}

// 17

let time = prompt("Enter the time");
if(time >=1 && time <6){
    console.log("Early Morning");
}else if(time >=6 && time <12){
    console.log("Morning");
}else if(time >=12 && time <16){
    console.log("Afternoon");
}else if(time >=16 && time <20){
    console.log("Evening");
}else if(time >=20 && time <24){
    console.log("Night");
}else{
    console.log("Invalid time");
}


// 18

let age5 = prompt("Enter your age:");
let height =prompt("Enter your height in cm:");
let weight =prompt("Enter your weight in kg:");

if (age5 >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("You are eligible.");
        } else {
            console.log("Weight requirement not met.");
        }
    } else {
        console.log("Height requirement not met.");
    }
} else {
    console.log("Age requirement not met.");
}


// Switch and Loops

// 19

let color = prompt("Enter a Color");

switch (color) {
    case "red":
        console.log("Stop!");
        break;

    case "yellow":
        console.log("Get ready!");
        break;

    case "green":
        console.log("Go!");
        break;

    default:
        console.log("Invalid traffic light color.");
}

// 20

for (let i=1; i<=20; i++){
    console.log(i);
}

// 21

for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

// 22

let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

// 23

let k = 1;
do{
    console.log(k);
    k++;
}while(k<=10);

// 24

let text = "JavaScript";

for (let character of text) {
    console.log(character);
}

// 25

let students = ["Priya", "Rahul", "Kumar", "Divya", "Arun"];

for (let student of students) {
    console.log(student);
}

// 26

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ":", student[key]);
}


// Mixed Practice

// 27

let o =prompt("Enter the o number:");
let p =prompt("Enter the p number:");

console.log("Sum:", o + p);
console.log("Difference:", o - p);
console.log("Product:", o * p);

if (p !== 0) {
    console.log("Remainder:", o % p);
} else {
    console.log("Remainder is undefined when dividing by zero.");
}

// 28

let counts = [5, 12, 8, 15, 20];

for (let count of counts) {
    if (count > 10) {
        console.log(count);
    }
}

// 29

let age6 = prompt("Enter your age:");

if (age6 >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

 // 30

let m = Number(prompt("Enter the m number:"));
let n = Number(prompt("Enter the n number:"));

let choice = prompt(
    "Choose an operation: addition, subtraction, multiplication, division"
);

switch (choice) {
    
    case "addition":
        console.log("addition:", m + n);
        break;

  
    case "subtraction":
        console.log("subtraction:", m - n);
        break;


    case "multiplication":
        console.log("multiplication:", m * n);
        break;

    
    case "division":
        if (n !== 0) {
            console.log("division:", m / n);
        } else {
            console.log("Cannot divide by zero.");
        }
        break;

    default:
        console.log("Invalid choice.");
}