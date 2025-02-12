//for loop

for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

//for... of loop

const arr = [1, 2, 3, 4, 5];

for (const e of arr) {
    // console.log(e);
}

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

//while loop

let p = 1;

while (p <= 10) {
    console.log(p);
    p++;
}

// Example 1: while loop - Printing numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let count = 1;

do {
    console.log("Count is: " + count);
    count++;
} while (count <= 5);