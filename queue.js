/**
 * Js does not provide different DS as Queue.
 * But the array provides functions, those can carry out the FIFO operations
 * It has a major problem of dequeue time complexity of O(n)
 * That's why a custom Queue is created
 */

// Creating a queue
let queue = [];

// Enqueuing an element (adding to the back of the queue)
queue.push(element1); // Add element to the end of the queue

/* Dequeuing an element (removing from the front of queue)
The problem is it's time complexity is O(n)
    */
var frontElement = queue.shift(); // Remove and return the front element

// Peeking at the front element (without removing it)
let frontElement = queue[0];

// Checking if the queue is empty
let isEmpty = queue.length === 0;

// Getting the size of the queue
let size = queue.length;

//Custom class for queue
//Array can be also used to implement the class
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
