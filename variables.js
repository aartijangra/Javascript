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

//object: made the code more organised
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

student.address='jalandhar';
console.log(student);

delete student.cgpa;
console.log(student);

//nested objects
const products = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    //function inside object = method
    fun: function func1(){
        console.log('function inside object');
    }
};
console.log(products);
console.log(products.name);
console.log(products['name']);
console.log(products['delivery-time']);
console.log(products.rating.count);
products.fun();

console.log(typeof console);
console.log(typeof console.log);

//JSON javascript object notation-similar to javascript object but has less features
//key value pair
[
{
    "name": "shirt",
    "delivery-time": "1 day",
    "rating": {
        "stars": 4.5,
        "count": 87
    }
}
]
//built-in JSON objects
//convert js objects in JSON
//JSON doesn't support functions
//type after stringify is string
console.log(JSON.stringify(products));


//convert JSON back into JS objects
const jsonString = JSON.stringify(products);
console.log(JSON.parse(jsonString));

//variables are temporary, if we refresh the page then it will get deleted so we use local storage 
//so it doesn't get deleted when we refresh the page
localStorage.setItem('message', 'Hello');
//to save an object inside the local storage
localStorage.getItem('message');
//getItem method gets a value out of local storage
//localStorage store only string so convert the other types object into string by JSON.stringify