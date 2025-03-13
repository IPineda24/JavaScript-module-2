async function myFunction() {
    console.log("Task 1");
    console.log("Task 2");
    await setTimeout(_ => { console.log("Task 2.5"), 5000 }) // para que tarde 5s
    console.log("Task 3");
    await setTimeout(_ => { console.log("Task 2.5"), 2000 })
    console.log("Task 4");
}
console.log("Task externa 1");
myFunction();

console.log("Task externa 2");