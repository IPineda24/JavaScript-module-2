// Objeto Literal
const object = {
    "name": "PEPE",
    "age": 12,
    "lastName": "GARCIA",
}
console.log(object.name);

// JSON tradicional
const json = '{"name": "PEPE", "age": 12, "lastName": "GARCIA"}';

console.log(object);
// Convertir objeto a JSON
const objectToJson = JSON.stringify(object);
console.log(objectToJson);
// Convertir JSON a objeto
const jsonToObject = JSON.parse(objectToJson);
console.log(jsonToObject);