// Objetos literales
const object = {
    "name": "Pepe",
    "lastName": "Garcia",
    "age": 26
}
console.log(object);
// convertir un objeto a JSON
const objectJson = JSON.stringify(object);
console.log(objectJson);

// convertir JSON a objeto
const jsonToObject = JSON.parse(objectJson);
console.log(jsonToObject);