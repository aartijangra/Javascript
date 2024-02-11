let count = 0;
console.log(count);

count +=2;
console.log(count);

let x = 5;
let y = 6;
let z = x+y;
console.log(z);

//calculate dog's age
let myage = 20;
let humanDogRatio = 7;
myDogAge = myage * humanDogRatio;
console.log(myDogAge);

//game points
let bonusPoints = 50;
console.log(bonusPoints);
bonusPoints = bonusPoints + 100;
console.log(bonusPoints);
bonusPoints = bonusPoints - 25;
console.log(bonusPoints);
bonusPoints = bonusPoints + 70;
console.log(bonusPoints);

//Datatypes
let age = 20;
let price = 100.5;
let fullname = "Aartijangra";
let section = 'A';
let x1 = null; //null means absence of an object
let a;
let b = BigInt("12345");
let s = Symbol("@#$%^");
let d = true;
console.log(typeof age);
console.log(typeof price);
console.log(typeof fullname);
console.log(typeof section);
console.log(typeof x1);
console.log(typeof a);
console.log(typeof b);
console.log(typeof s);
console.log(typeof d);

//object
const student = {
//  key: value
    fullName: "Prajwal",
    age: 23,
    cgpa: 6.7,
    isPass: true,

};
console.log(student);
console.log(student["age"]);
console.log(student.age);
//we can update const object's key
student["age"]+=1;
console.log(student.age)