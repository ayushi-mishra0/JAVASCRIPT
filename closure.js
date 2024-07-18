//closure 
//Example 1
// var sum = function(a){
//   console.log("hello "+a);
//   var c=4;
//   return function(b){
//     return a+b+c;
//   }     
// }
// var store= sum(2);
// console.log(store(5))

//Example2 
// var sum= function(a,b,c){
//     return{
//         getSumTwo:function(){
//             return a+b;
//         },
//         getSumThree:function(){
//             return a+b+c;
//         }
//     }
// }

// var store= sum(3,4,5);//calling
// console.log(store.getSumTwo())
// console.log(store.getSumThree())

// var store1 = sum(9,8,6)
// console.log(store1.getSumTwo())
// console.log(store1.getSumThree())







function outerFunction() {
    let outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // I am outside!
  