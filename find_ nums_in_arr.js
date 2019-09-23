// You're given a number N. You want to return an array that has N things in it (N length) where the elements are UNIQUE and the elements sum to zero.

// n = 2 ==> -1, 1
// n = 3 ==> -1, 0, 1
// n = 4 ==> -2,-1,1,2
// n = 5 ==> -2, -1, 0, 1, 2

function solutionfun(N) {
	let num = Math.floor(N / 2) * -1;
	let solution = [];
	while (solution.length < N) {
		if (N % 2 === 0 && num === 0) {
			num++;
		} else {
			solution.push(num);
			num++;
		}
	}
	return solution;
}
