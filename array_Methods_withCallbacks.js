const numbers = [1, 2, 3, 4, 5];

// Using forEach
numbers.forEach(function(number) {
    console.log(number * 2);
});

// Using map
const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled);

// Using filter
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);
