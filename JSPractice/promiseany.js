const promise1 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 1 rejected"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 800));

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("Any Winner:", result);
    })
    .catch((error) => {
        console.log("Any Error:", error);
    });
// Output:
// Any Winner: Promise 2 resolved