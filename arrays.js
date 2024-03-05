var ourArray = ["john" , 23];
var firstval = ourArray[0];
console.log(firstval);

//nested array
var myarray = [["universe", 10],["moon", 20],["sun", 30]];

//array is an special type of object
// it has properties and methods
console.log(typeof [1,2]);
console.log(Array.isArray([1,2]));
console.log(myarray.length);

myarray.push(100);
console.log(myarray);

myarray.splice(0,2); //to delete value(index,no.of valuues)


