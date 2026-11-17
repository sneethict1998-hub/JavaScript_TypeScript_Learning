
/*
Promise is an object.

Outcomes/States of Promise:
1. Pending  - Promise is still running.
2. Success  - Promise is completed successfully.
3. Failure  - Promise failed with an error.

Promise function will take an executor function (arrow function).
The arrow function will have 2 parameters: resolve and reject.

Syntax:
let <objectname> = new Promise((resolve, reject) => {
    
});

To capture the result, Promise will take then, catch and finally.

then    > Positive result
catch   > Failure
finally > Cleanup code
*/

let promise = new Promise((resolve, reject) => {
    let r = false;

    if (r) {
        resolve('Operation succeeded');
    } else {
        reject('Operation failed');
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Cleanup completed');
    });