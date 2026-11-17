console.log("Start"); setTimeout(() => { console.log("Middle"); }, 2000); console.log("End");

Promise.resolve(10) .then(n => n * 2) .then(n => n + 5) .then(n => console.log(n));