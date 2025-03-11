function myFuction() {
    console.log("Task 1");

    setTimeout(_ => { console.log("Task 2"), 5000 });

    console.log("Task 3");

    console.log("Task 4");
}

console.log("Task fuera 1");

myFuction();

console.log("Task fuera 2");
