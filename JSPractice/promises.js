const randomNumberPromise = new Promise ((resolve, reject) => {

    setTimeout(() => {

        const randomValue= Math.random();
        if(randomValue < 0.5){
            resolve('Success + '+ randomValue);

        }else{
            reject('Error' + randomValue);
        }   

    }, 2000); // Simulating a delay of 2 seconds
});


randomNumberPromise
        .then(resut =>{
            console.log("Promise is passed "+ resut);
        })
        .catch(error =>{
            console.log("Promise is rejected "+ error);
        });

