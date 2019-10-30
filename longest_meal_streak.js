// build an app that tracks his consective day steaks, takes in entire food diary into acount and tell him what is his longest consective days was.

function mealstreak(arr) {
	//counter -> keep track of consective days
	//maxdays = 0
	//loop the array
	//compare budget with sum of three eles in the array
	// if sum > budget reset counter to zero
	// if sum <= budeget you increament counter
	//      if the maxdays < counter, maxdays = counter
	//o(n)

	let counter = 0;
	let maxdays = 0;

	for (let i = 0; i < arr.length; i++) {
		let budget = arr[i][0];
		let sum = 0;
		for (let j = 1; j < arr[i].length; j++) {
			sum += arr[i][j];
		}
		if (sum > budget) {
			counter = 0;
		} else {
			counter++;
			if (maxdays < counter) {
				maxdays = counter;
			}
		}
	}
	return maxdays;
}

console.log(mealstreak([ [ 1620, 400, 800, 600 ], [ 1620, 350, 650, 500 ], [ 1650, 300, 600, 500 ] ]));
//reuturn longest consective days

// 1620, 400, 800, 600
// 1620, 350, 650, 500
// 1650, 300, 600, 500
// 1650, 300, 600, 300
// 1650, 300, 600, 1000
