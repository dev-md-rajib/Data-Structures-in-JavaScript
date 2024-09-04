/**
 * A collection of key-value pairs, where keys can be of any data type.
 * The values can be access in Time Complexity of O(1)
 */

// Creating a map
// let map = new Map([
//     [key1, value1],
//     [key2, value2],
// ]);

//Adding and updating value under a key in T.C. of O(1)
var map = new Map();
map.set("key3", "value3");

//Getting value under a key. T.C. O(1)
map.get("key3");
console.log(map.get("key3"));

//Check if it contains specific key T.C O(1)
map.has("key1");

/**
 * Others method same as set can be used
 * map.delete(key)
 * clear(), map.size, map.keys(), map.values()
 */
