var globalVariable = "Hello";
function globalFunction(){
    console.log('World');
}
console.log(window.globalVariable);
window.globalFunction();

/*The window object allows you to access 
global variables directly using window.
variableName*/

/* Global functions can be called using 
window.functionName(). */
