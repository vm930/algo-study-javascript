/*

*/

function solution(N, K) {
	// work backwards in this solution
	let solution = 0;
	// create a variable to store solution to return let solution = 0;
	// 1st check k to see if its zero
	while (N > 0) {
		if (N % 2 === 0) {
			N = N / 2;
			//increment solution
			solution += 1;
			if (K > 0) {
				//decrement K
				K -= 1;
			}
		} else {
			// increment solution
			solution += 1;
			//decrement N
			N -= 1;
		}

		if (N === 2) {
			solution += 2;
			N -= 2;
		}

		if (N === 1) {
			solution++;
			N--;
		}

		return solution;
	}
}
