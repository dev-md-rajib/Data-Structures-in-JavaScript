// Creating an array :let array = [element1, element2, element3];
let nums = [1, 2, 3, 4, 5, 6];

// Accessing elements :let element = array[index];
console.log(nums[2]); //output: 3

// Adding elements : array.push(newElement);
nums.push(7);
console.log(nums); //output: [1, 2, 3, 4, 5, 6, 7]

// Removing element from the back : let removedElement = array.pop();
let removedElement = nums.pop();
console.log(removedElement); //output: 7
console.log(nums); //output: [1, 2, 3, 4, 5, 6]

//Removing first element of the Array: let firstElement = array.shift()
let firstElement = nums.shift();
console.log(firstElement); //output: 1
console.log(nums); //output: [2, 3, 4, 5, 6]

//Adding element in the front of the array : array.unshift(element1,element2 ... ,elementN)
nums.unshift(1);
console.log(nums); //output: [1, 2, 3, 4, 5, 6]

//Merging two array and return new one : array1.concat(array2)
const nums2 = [10, 20, 30, 40, 50];
let mergedArray = nums.concat(nums2);
console.log(mergedArray); //output: [1,  2,  3,  4,  5, 6, 10, 20, 30, 40,50]

//Returns a  copy of a portion of an array into a new array object : array.slice(start, end)
let slicedArray = nums.slice(1, 5);
console.log(slicedArray); //output:[ 2, 3, 4, 5 ]

//Deleting numbers of element from an array and also replacing existing elements
// -Syntax: array.splice(start, deleteCount, item1, ..., itemN)

let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape");
console.log(fruits); // ['apple', 'grape', 'orange']

//finding the first index where a target element belongs: array.indexOf(element)
//returns -1 if it can't find the element
//lastIndexOf() can be used for exact opposite case
let newfruits = ["apple", "banana", "orange"];
let index = newfruits.indexOf("banana");
console.log(index); //output: 1

//Returns the value of the first element in the array that satisfies the provided testing function.
//array.find(callback(element,index,array)[, thisArg])
//findIndex() can be used for the same case. just returns the index instead element
var numbers = [1, 2, 3, 4, 5];
let found = numbers.find((element) => element > 3);
console.log(found); // 4

//Creates a new array populated with the results of calling a provided function on every element in the calling array.
//array.map(callback(element,index, array))

let numbers = [1, 2, 3, 4];
let doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8]

//array.filter(callback(element,index, array))
//return a new array with element that returns true from the callback
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]
