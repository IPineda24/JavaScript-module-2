// suma dos numeros usando Try catch
try {
    const a = 0;
    let b = 10;
    a = 10;
    b = 3;
    console.log(a + b);
} catch (error) {
    console.log("Lo sentimos hubo un error", error)
} finally {
    console.log("Si funciono");
}

//TRY CATCH FINALLY
try {
    let a = parseInt(prompt("Ingresa tu edad"));
    let b = prompt("Ingresa tu nombre");
    if (isNaN(a)) {
        throw new Error("Little Jocker");
    }
    if (a >= 18) {
        alert("Es mayor de edad");
    } else {
        alert("es menor de edad");
    }
} catch (error) {
    alert("Hubo un error");

    console.log("El error es:", error)
} finally {
    alert("Bueno quien tiene hambre");
}



