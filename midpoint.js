// Directions
//Return the "middle" node of a linked list
// if the list has an even number of elements, return the node at the end of the frist half of the list.
//DO NOT  use a counter variable or retrieve the size of the list, and only iterate thru the list one time.

//eg:
/*
const l = new LinkedList();
l.insertLast("a")
l.insertLast("b")
l.insertLast("c")
midpoint(l); => returns {data: "b"}

edge case with evan number
*/

function midpoint(list) {
	let slow = list.head;
	let fast = list.head;
	while (fast.next !== undefined && fast.next.next !== undefined) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
