try {
    const a = parseInt(prompt("Escriba un numero"));
    const b = parseInt(prompt("Escriba otro numero"));
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Bayunquito");
    }
    alert(a + b);
} catch (error) {
    console.log("Hay un error", error)
} finally {
    console.log("SOY PODEROSO")
}



