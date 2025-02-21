// case1 
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });


// case1 

const function1 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function 1');
        }, 2000);
    });
}

// case 2

const function2 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function 2');
        }, 2000);
    });
}

// case3 
const function3 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Function 3');
        }, 2000);
    });
}

Promise.all([
    function1(),
     function2(),
      function3()])
      .then((dataArray ) => {
            console.log(dataArray);
})

.catch((error) => {
    console.log('Error: ' + error);
});




