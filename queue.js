//Create a Queue class
//when implementing enque and dequeue, we should be add from the tail, and remove from the head to maximizing efficiency.

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		var newNode = new Node(val); //create a Node instance
		if (!this.first) {
			//edge cases
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;
		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
			//edge cases when only 1 thing in the list
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
