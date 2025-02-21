console.log('Task 1: Start');

function performTask() {
    // Simulating a time-consuming task
    const start = Date.now();
    while (Date.now() - start < 2000) {
        // Blocking loop for 2 seconds
    }
    console.log('Task 2: Performing Task');
}

performTask();
console.log('Task 3: End');


console.log('Task 1: Start');

function performTaskAsync() {
    setTimeout(() => {
        console.log('Task 2: Performing Task');
    }, 2000); // Simulating a delay of 2 seconds
}

performTaskAsync();
console.log('Task 3: End');



