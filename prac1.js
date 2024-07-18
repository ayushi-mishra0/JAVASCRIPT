let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age<0){
    console.error("Please enter a valid age")
}

const canDrive = (age)=>{
      return age>=18?True:False
}
if(canDrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You cannot drive")
}