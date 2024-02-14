//for loop

for(let i=1; i<=5; i++){
    console.log("js");
}

//calculate sum of 1 to n
let sum = 0;
for(let i = 1; i <= 20; i++){
    sum += i;
}
console.log(sum);

//while loops
let i=1;
while(i<=5){
    console.log("html");
    i++;
}

//do-while loop
let j=1;
do{
    console.log("css");
    j++;
} while(j<=5);

//for-of loop  -- used for strings and arrays
let str = "JavaScript";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);


//for-in loop -- used for objects
let student = {
        fullName: "Prajwal",
        age: 23,
        cgpa: 6.7,
        isPass: true,
    
    };

for(let key in student){
    console.log("key=", key ,"value=" , student[key]);
}

//print all even numbers from 0 to 50
for(let num=0; num<=50; num++){
    if(num%2==0){
        console.log(num);
    }
}

//guess the number
let gamenum = 25;
let usernum = prompt("guess the number:");

while(usernum != gamenum){
    usernum = prompt("you entered wrong, guess again:");
}
//prompt always take input as strings
console.log("congratulations, you entered the right number");