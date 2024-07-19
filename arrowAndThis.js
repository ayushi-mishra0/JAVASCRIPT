const user ={
    username : "Ayushi",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.user},welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
//Method1 Explicit return
// var addTwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// //Method2 Implicit return
// var addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(6,7))

const greet = (sum) =>{
    console.log("hellow ji");
}
function greetings(){}
greet(2);

const square = (num) => num*num;
console.log(square(3));

const calculate =(a,b,operation) => {
    return operation(a,b);
};
const result = calculate(3,4,function(num1,num2){
    return num1 + num2;
});
console.log(result);

// method 1
const addition =  calculate(3,4,function(num1,num2){
return num1+num2;

});
console.log(addition);



 