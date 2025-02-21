const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 2");
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Success 3"), 1000));

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
});
// Output:  
// Promise 1: { status: 'fulfilled', value: 'Success 1' }
// Promise 2: { status: 'rejected', reason: 'Error 2' }