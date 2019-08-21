//implement a hash table & hash function
function hash(key, arrayLen) {
	let total = 0;
	for (let char of key) {
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

//test data
hash('pink', 10);
hash('blue', 10);
hash('maroon', 10);

/*
problems:
1. Only hashes strings 
2. not constant time - linear in key length 
3. could be a little more random
*/

class HashTable {
	constructor(size = 5) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
}
