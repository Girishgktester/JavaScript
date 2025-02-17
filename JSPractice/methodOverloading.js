// function print(){
//     console.log('Hello');
// }


// function print(){
//     console.log('Hello1');
// }


// function print(name, age){

//     console.log(`name : ${name} age : ${age}`);
// }
// print('John', 30);


function displayBrowser(browserName, browserVersion, remote) {
    if (typeof browserName === 'string' && typeof browserVersion === 'number' && typeof remote === 'boolean') {
        console.log(`Browser: ${browserName} Version: ${browserVersion} Remote: ${remote}`);
    } else if (typeof browserName === 'string' && typeof browserVersion === 'number') {
        console.log(`Browser: ${browserName} Version: ${browserVersion}`);
    } else {
        console.log(`Browser: ${browserName}`);
    }
}

// Function call with correct argument types
displayBrowser('chrome', 90, true);
displayBrowser(90);