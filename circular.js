/*
Directions:
Given a linked list, return true if the list is circular, false if it is not.
eg:

const l = new List();
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")

*/

function circular(list) {
	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next !== undefined) {
		slow = slow.next;
		fast = fast.next.next;
		//look at the nodes fast and slow are pointing to the same node in memory
		if (slow === fast) {
			return true;
		}
	}

	return false;
}
