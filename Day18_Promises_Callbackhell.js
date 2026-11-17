
/*
Promise Chaining

connectToDB()     > Connect to Database
fetchRecords()    > Fetch records
updateRecords()   > Update records
closeConnection() > Close connection

.then() is used to execute promises sequentially.
Each function runs after the previous promise is resolved.

If there is a rejection, .catch() is required to handle the error.
*/

function connectToDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Connect to Database');
            resolve();
        }, 1000);
    });
}

function fetchRecords() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Records Fetched');
            resolve();
        }, 2000);
    });
}

function updateRecords() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Records Updated');
            resolve();
        }, 800);
    });
}

function closeConnection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Connection closed');
            resolve();
        }, 1000);
    });
}

connectToDB()
    .then(fetchRecords)
    .then(updateRecords)
    .then(closeConnection)
    .catch((error) => {
        console.log('Error:', error);
    });

// If there is a rejection, .catch() handles the error.