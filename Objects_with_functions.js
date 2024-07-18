var person = {
    firstName: "Ayushi",
    secondName: "Mishra",
    age:21,
    fullName: function(){
        return this.firstName+ " " + this.secondName;
    },
    birthday: function(){
        return this.age++;
    }
};
console.log(person.fullName()); //method calling
console.log(person.birthday());
console.log(person.age);  //Object calling