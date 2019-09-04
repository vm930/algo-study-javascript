var fizzBuzz = function(n) {
	//create an array of nums - n
	//create a solution array

	//then create a for loop that goes into the array and check if
	//if num%3 === 0 push the "fizz" to solution
	//if num%5 === 0 push the "buzz" to solution
	//if num%3 && num%5 push "fizzBuzz" to solution
	//else push  parseInt(ele)
	//return solution array
	//o(n)

	let solution = [];
	let arr = [];

	for (let i = 0; i < n; i++) {
		arr.push(i + 1);
	}

	for (let j = 0; j < arr.length; j++) {
		if (arr[j] % 3 === 0 && arr[j] % 5 === 0) {
			solution.push('FizzBuzz');
		} else if (arr[j] % 3 === 0) {
			solution.push('Fizz');
		} else if (arr[j] % 5 === 0) {
			solution.push('Buzz');
		} else {
			let ele = arr[j].toString();
			solution.push(ele);
		}
	}
	return solution;
};

console.log(fizzBuzz(15));
