/**
 * FIFO
 * methods - print, enqueue, dequeue, front, size, isEmpty
 */
function Queue() {
  collection = [];
  this.print = () => console.log(collection);

  //adding element to end of queue
  this.enqueue = (element) => collection.push(element);

  // removing elements from the begining
  // shift is just like pop, but removes the element from the begining of array and returns the array
  this.dequeue = () => collection.shift();

  // show first element of the queue
  this.front = () => collection[0];

  // returns length of queue
  this.size = () => collection.length;

  // check if queue is empty
  this.isEmpty = () => collection.length === 0;
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
q.print();
console.log(q.front());
q.dequeue();
q.print();
console.log(q.isEmpty());
