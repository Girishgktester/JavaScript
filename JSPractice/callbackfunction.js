// // callback function is a function that is passed as an argument to another function
// // basic example
function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}

function welcome() {
    console.log('Welcome to JS');
}

greet('John', welcome);

// callback with ansync
function printInfo(name, callback) {

    //async call
    setTimeout(() => {
        console.log('Print Info ' + name);
        callback('Success');
    }, 3000);

}


function displayMessage(Message) {
    console.log('Message is ' + Message);
}

printInfo('Hello', displayMessage);


// callback with ansync
function fetchUserData(userID, callback) {
    setTimeout(function () {
        const user = {
            id: userID,
            name: 'John',
            age: 30
        };

        const usr = user[userID]
        if (usr) {
            callback(null, usr);
        } else {
            callback('User not found', null);
        }

    }, 3000);
}

// callback function:
function handleUserData(error, users) {
    if (error) {
        console.error(error);
    } else {
        console.info("User Data: ", users);
    }

}


fetchUserData('name', handleUserData);
fetchUserData('id', handleUserData);
