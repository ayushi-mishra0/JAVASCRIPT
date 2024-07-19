function fetchData(callback) {
    setTimeout(function() {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log('Received data:', data);
}

fetchData(displayData);
