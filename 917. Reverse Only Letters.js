// 917. Reverse Only Letters

/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
        s   e
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

var reverseOnlyLetters = function(S) {
	//split string into array
	let arr = S.split('');
	//using two pointers , s & e

	// Example 3:
	// Input: "Test1ng-Leet=code-Q!"
	// Output: "Qedo1ct-eeLg=ntse-T!"

	//function check if character is a letter?
	function isLetter(char) {
		let lowerChar = char.toLowercase();
		//if the charcodeat 65~90 upper 97~122 lower S[i].charcodeat()
		if (lowerChar.charCodeAt() >= 97 && lowerChar.charCodeAt() <= 122) {
			return true;
		} else {
			return false;
		}
	}

	function swap(arr) {
		let s = 0;
		let e = arr.length - 1;

		while (s < e) {
			if (isLetter(arr[s]) && isLetter(arr[e])) {
				let temp = arr[e];
				arr[e] = arr[s];
				arr[s] = temp;
				s++;
				e--;
			} else {
				if (!isLetter(arr[s])) {
					s++;
				}
				if (!isLetter(arr[e])) {
					e--;
				}
				// if (!isLetter(arr[e]) && !isLetter(arr[s])) {
				// 	s++;
				// 	e--;
				// }
			}
		}
		return arr;
	}

	let swaparr = swap(arr);
	return swaparr.join('');

	//write a swap function to pass in an array
};
