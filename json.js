//collecting information
let myDetails = {
    "name" : "Alice",
    "age" : 23
};

//Sending Information
let jsonString = JSON.stringyfy(myDetails);

//Receiving Information 
let jsonString = '{"name" : "Alice","age":23}';
let myDetails = JSON.parse(jsonString);
console.log(myDetails.name);
console.log(myDetails.age);