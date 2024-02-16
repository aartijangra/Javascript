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


