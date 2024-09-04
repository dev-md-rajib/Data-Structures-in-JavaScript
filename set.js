/**
 * Set only keeps the unique values.
 * Also can be check if any element exist in the set in O(1)
 *
 */

var mySet = new Set();
//add has time complexity of O(1)
mySet.add(1);

//Delete has time complexity of O(1)
let mySet = new Set([1, 2, 3]);
mySet.delete(2);

//has(value) is used to check if it contains a certain value. T.C. O(1)
mySet.has(1);

//clear() function is used to delete all the values. Time complexity O(n)
mySet.clear();

//Size is used to find the number of elements.
mySet.size;

/**
 * set.keys() and set.values() both returns the values it contains in the order
 * of insertion.
 */

mySet.keys();
mySet.values();
