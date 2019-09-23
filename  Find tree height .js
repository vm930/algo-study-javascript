/*
 Find tree height 

*/

let set = new Set([]);

function findDepth(root) {
	if (root === null) {
		return 0;
	}
	//maybe check set.has(root.val) is in the set return 0

	let l_depth = 0;
	let r_depth = 0;

	if (root.left !== null) {
		//maybe add the set.add(root.val)
		l_depth = findDepth(root.left);
		//remove the val from the set.
	}
	if (root.right !== null) {
		//maybe add the set.add(root.val)
		r_depth = findDepth(root.right);
		//remove the val from the set.
	}

	return Math.max(l_depth, r_depth) + 1;
}
