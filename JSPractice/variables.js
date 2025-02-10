var x = 10; // deceared globally

function test() {

    var y = 20; // declared locally
    console.log(x);
}

console.log(x);

var top = "hey JS";

function test1() {

    var pop = "Hello JS";
    console.log(pop);

}

test1();
console.log(top);

var browser = "Chrome";
var browser = "Firefox";

console.log(browser);

browser = "Safari";

console.log(browser);

var g;  // default value of g is undefined

console.log(g);

// issue with Var

var flag = "Tom";

var t1 = 4;
if (t1 > 3) {
    var flag = "Jerry";
}

console.log(flag);
