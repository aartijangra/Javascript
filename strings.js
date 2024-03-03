//Strings
let str = "AartiJangra";
console.log(str[2]);
let size = str.length;
console.log(size);

//Template Literals
let specialStrings = `This is a template literal`;
console.log(typeof specialStrings);

//why template literals?

let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of", obj.item , "is" , obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
//${expression} this is string interpolation: To create strings by doing substitution of placeholders
console.log(output);


//string methods

//strings are immutable in js
let str2 = "javaScript";
let newstr = str2.toUpperCase();
let newstr2 = str2.toLowerCase();
console.log(str2);
console.log(newstr);
console.log(newstr2);

console.log(str2.slice(4,10));

let str3 = "     aarti...";
let newstr3 = str3.trim();   //removes whitespaces
console.log(newstr3);
let str4 = "jangra";
console.log(str3.concat(str4));
console.log(str3.replace(".","*"));
console.log(str3.replaceAll(".","*"));

var st = "aarti";
var st2 = " jangra";
st += st2;
console.log(st);

console.log('jangra'.length);
//now a ques raise that how string can have methods
//methods is an action which an object is able to perform
//javascript has a special feature of Auto boxing 
//js automatically wraps this string in a special object first and this object has a property length
//auto boxing works with other datatype also like boolean or number but not with 2 datatypes- null and undefined.
//example 
3.0.toString();
true.toString();

//but not  null.property and undefined.method()


//object as references
const object1 = {
    message: 'hello'
};
//here message: 'hello' this is store in computer memory and object1 is reference of it
const object2 = object1;
//so this doesn't make a copy of message: 'hello' it makes a copy of reference which points to message: 'hello'

object1.message = 'goodjob';
console.log(object1);

const object3={
    message: 'goodjob'
};
console.log(object1 === object3);
//false because object1 and 3 are refernce they do not compare the value inside them 
console.log(object1 === object2);



const object4 = {
    message: 'Namaste',
    price: 899
};
//const message = object4.message;
const{ message ,price} = object4;
//if variable name and property name is same then this shortcut is destructing easier way to take properties out of the object
//and save it in a variable message
console.log(message);
console.log(price);


//shorthand method and property
const object5 = {
    //message: message
    message,
    // method: function function1(){
    //     console.log('method');
    // }
    method() {
        console.log('method');
    }
};
console.log(object5);
object5.method();