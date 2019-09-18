/*
N = Number of chips in a bet
K = number of times you can go all in 

return the possible smallest number of rounds 
betting on 2 chips is not considered as all in 
*/

function solution(N, K) {
	// work backwards in this solution
	let solution = 0;
	// create a variable to store solution to return let solution = 0;
	// 1st check k to see if its zero
	while (N > 1) {
		if (K > 0) {
			if (N % 2 === 0) {
				N = N / 2;
				//increment solution
				solution += 1;
				//decrement K
				K -= 1;
			}
		}
		// increment solution
		solution += 1;
		//decrement N
		N -= 1;
	}
	return solution;
}

console.log(solution(10, 10));
console.log(solution(8, 18));
