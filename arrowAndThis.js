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
var addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4))

//Method2 Implicit return
var addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(6,7))


 