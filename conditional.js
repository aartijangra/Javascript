//operators

let a = 10;
let b = 20;

console.log("addition" , a+b);
console.log("subtraction" , a-b);
console.log("multiplication" , a*b);
console.log("division" , a/b);

let x=5;
let y=2;
console.log("modulus" , x%y);
console.log("exponential" , x**y);

//unary operators
console.log("increment", ++a);
console.log("decrement", --b);

//comparison operators
console.log(a==b);
console.log(a!=b);
y=5;
console.log(x===y);   //strict comparison
console.log(a!==b);

//logical operator
let l = 6;
let h = 5;
let con1 = a<b;
let con2 = a===6;
console.log(con1 && con2);
console.log(con1 || con2);

//ternary operators
// condition ? true output : false output
let age = 25;
let result = age >=18 ? "adult" : "not adult";
console.log(result);

//conditional statements
//if else-if else statement
let yourage = 20;
if(age<18){
    console.log("you are teenager!!");
}
else if(age>60){
    console.log("you are senior citizen!!");
}
else{
    console.log("you are adult!!");
}


//one time pop up message on website 
//alert("Greetings all!!");

//take input from user(temporary)
// let name = prompt("hello");
// console.log(name);

//print grades of students according to marks
let score = 75;
let grade;
if(score>=90 && score<=100){
    grade = "A";
}
else if(score>=70 && score<=89){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else if(score>=0 && score<=49){
    grade = "F";
}

console.log(grade);