const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 rejected"), 800));

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("Race Winner:", result);
  })
  .catch((error) => {
    console.log("Race Error:", error);
  });
