/*
19. Remove Nth Node From End of List
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
*/

var removeNthFromEnd = function(head, n) {
	//use two runner method
	//take care of edge case node is null or 1 element
	if (head.next === null || head === null) {
		return null;
	}
	let fast = head;
	let slow = head;
	for (let i = 0; i < n; i++) {
		if (fast === null) {
			return head;
		} //taking care of edge case where n>length of head
		fast = fast.next;
	}
	while (fast !== null) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;
	return head;
};
