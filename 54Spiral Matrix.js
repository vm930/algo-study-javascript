/*
54. Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:
Input:
[ top, left      top right
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9,10,11,12]
  bottom left    bottom right 
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/* 
define the coordinate 
solution array = [];
top = 0;
left = 0;
right = matrix[0].length -1
bottom = matrix.length -1
initial i and j to keep track of current index

while loop where solution.length <= length * width of matrix 

if j-> right j<=right push matrix[i][j] to solution j++; also increment top +1 && i
if i-> bottom i<= bottom push matrix to solution i++; also increment top
if j ->left j>= left push matrix to solution j--; also decrement right 
if i ->top i>= top push matrix to solution i++; also increment top 
*/

var spiralOrder = function(matrix) {
	let solution = [];
	let top = 0;
	let left = 0;
	let right = matrix[0].length - 1;
	let bottom = matrix.length - 1;
	let i = 0;
	let j = 0;

	while (solution.length < matrix[0].length * matrix.length) {
		// console.log(solution);
		//starting at the top left corner
		if (i === top && j === left) {
			while (j <= right) {
				solution.push(matrix[i][j]);
				j++;
			}
			i++;
			j--;
			top++;
		}
		//when it reach to the top right corner
		if (i === top && j === right) {
			while (i <= bottom) {
				solution.push(matrix[i][j]);
				i++;
			}
			j--;
			i--;
			right--;
		}

		if (i === bottom && j === right) {
			while (j >= left) {
				solution.push(matrix[i][j]);
				j--;
			}
			j++;
			bottom++;
			i++;
		}

		if (i === bottom && j === left) {
			console.log('i', i);
			console.log('j', j);
			break;
			while (i >= top) {
				solution.push(matrix[i][j]);
				i--;
				console.log(solution);
				console.log('i', i);
				console.log('j', j);
				console.log('left', left);
				break;
			}

			i++;
			j--;
			left++;
			console.log(solution);
			console.log('i', i);
			console.log('j', j);
			console.log('left', left);
			break;
		}
	}
};

console.log(spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
