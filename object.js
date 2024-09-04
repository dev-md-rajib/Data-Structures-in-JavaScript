/**
 * A collection of key-value pairs.
 *
 */

// Creating an object
let object = {
  key1: value1,
  key2: value2,
  key3: value3,
};

/**
 * keys can be even arrays.
 * keys are converted to string
 */

// Accessing values
var value = object.key1;
let value = object["key1"];

/**
 * Square bracket notation provides some extra facilities
 * It can help to access pairs where key has space or is other unusual like array
 * It can also help to access using variable which contains the key
 */

// Adding a key-value pair
object.key4 = value4;

// Removing a key-value pair
delete object.key4;

//Accessing all the keys as an array
//syntax: Object.keys(objectName)
Object.keys(object);

//Access the values : Object.values(objName)
Object.values(object);

//Looping over the object
for (let key in object) {
  //...;
  //the key will contain key one by one
  //that can be used to access the elements.
}
