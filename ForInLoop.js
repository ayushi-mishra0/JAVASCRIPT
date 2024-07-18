
let animal = {
    name : "Zebra",
    leg : 4
};
for(let key in animal){
    console.log(key,animal[key]); 
}

let names = ["Rahul","Neha","Aman","Rishabh"];
for(let index in names){
    console.log(index,names[index])
}

for(let name of names){
    console.log(name)
}
