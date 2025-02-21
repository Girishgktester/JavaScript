function getEvenNumber(value, delay) {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (value % 2 === 0) {
                resolve(value);
            } else {
                reject('Error');
            }
        }, delay);
    });
}

// promise chaining

getEvenNumber(2, 2000)

    .then((result) => {
        console.log('Even Number: ' + result);
        return getEvenNumber(4, 2000);
    })
    .catch((error) => {
        console.log('Error: ' + error);
    });
// Output:
// Even Number: 2