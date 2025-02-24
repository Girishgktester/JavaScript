// // async function without await

// async function f1() {
//     console.log("Inside f1");
//     return 42;
// }

// f1().then((result) => {
//     console.log("Result:", result);
// });


// // aysnc function without await rerturns a promise that resolves to the value returned by the function. The value is 42 in this case.

// async function f2() {

//     console.log("Inside f2");
//     throw new Error("Error in f2");

// }

// f2().catch(error => {
//     console.log(`Error:", ${error}`);
// });


// async function without await returns a promise that rejects with the value thrown by the function. The value is an Error object in this case.


// async function with await    
function getInfo(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
            console.log("Data received");
        }, 2000);
    });
};

// create an async function which is calling getinfo

async function f3() {
    console.log("Inside f3");
    const result = await getInfo();
    console.log("Result:", result);
}

f3();

