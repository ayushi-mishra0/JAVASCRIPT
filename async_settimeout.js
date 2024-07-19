function delayedGreeting(name) {
    console.log('Hello ' + name);
}

function greetAfterDelay(callback, delay) {
    setTimeout(function() {
        callback('World');
    }, delay);
}

greetAfterDelay(delayedGreeting, 2000); // Waits for 2 seconds before logging "Hello World"
