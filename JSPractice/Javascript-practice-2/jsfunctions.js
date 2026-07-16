function add(a,b){
    return a+b;
}

const sum = add(5,6) 
console.log(sum)

//5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4)); // 10

//4. Default Parameters
function login(user = "admin") {
    console.log(user);
}

login();        // admin
login("john");  // john

//6. Callback Function
function process(callback) {
    callback();
}

process(() => {
    console.log("Running callback");
});

function execute(fn) {
    fn();
}

execute(() => console.log("Hello")); 

