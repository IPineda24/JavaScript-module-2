async function myFuction() {
    await setTimeout(_ => { console.log("Task await 2"), 1000; });
    console.log("Task 1");

    await setTimeout(_ => { console.log("Task await 1"), 5000; }); // imprime despues de 5s

    console.log("Task 3");
    await setTimeout(_ => { console.log("Task await 2"), 1000; });
    console.log("Task 4");
}

console.log("Task fuera 1");
myFuction();
console.log("Task fuera 2");
