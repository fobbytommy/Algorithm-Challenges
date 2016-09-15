/* ================ BASIC 13 ================================================ */
/* ========================================================================== */
// Print 1 - 255
// Print all the integers from 1 to 255

function print255() {
	for (var i = 1; i <= 255; i++) {
		console.log(i);
	}
}
// print255();

/* ========================================================================== */
// Print Odds 1 - 255
// Print all odd integers from 1 to 255

function odds255() {
	for (var i = 1; i <= 255; i++) {
		if (i % 2 == 1) {
			console.log(i);
		}
	}
}
// odds255();

/* ========================================================================== */
// Print Ints and Sum 0 - 255
// Print integers from 0 to 255, and with each
// integer print the sum so far.

function ints_sum_255() {
	var sum = 0;
	for (var i = 0; i <= 255; i++) {
		console.log("Current index: " + i);
		sum += i;
		console.log("Current sum: " + sum);
	}
}
// ints_sum_255();

/* ========================================================================== */
// Iterate and Print Array
// Iterate through a given array, print each value.

function printArray(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		console.log(arr[i]);
	}
}
// var arr = [1, 2, 3, 4];
// printArray(arr);

/* ========================================================================== */
// Find and Print Max
// Given an array, find and print its largest element.

function printMax(arr) {
	var max = arr[0];
	for (var i = 1,j = arr.length; i < j; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log(max);
}
// var arr = [1, -3, 6, 3, 4, 5, 7, 2];
// printMax(arr);

/* ========================================================================== */
// Get and Print Average
// Analyze an array's values, and print the average.

function printAverage(arr) {
	var sum = 0;
	var avg;
	for (var i = 0, j = arr.length; i < j; i++) {
		sum += arr[i];
	}
	avg = sum / arr.length;
	console.log(avg);
}
// var arr = [1, 2, 3];
// printAverage(arr);

/* ========================================================================== */
// Array with Odds
// Create an array with all the odd integers between
// 1 and 255 (inclusive)

function array_odds() {
	var arr = [];
	for (var i = 1; i <= 255; i++) {
		if (i % 2 == 1) {
			arr.push(i);
		}
	}
	return arr;
}
// console.log(array_odds());

/* ========================================================================== */
// Square the Values
// Square each value in a given array, returning that
// same array with changed values.

function square_array(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		arr[i] *= arr[i];
	}
	return arr;
}
// var arr = [1, 2, 3, 4];
// console.log(square_array(arr));

/* ========================================================================== */
// Greater than Y
// Given an array and a value Y, count and print the
// number of array values greater than Y.

function greater_than_y(arr, Y) {
	var count = 0;
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] > Y) {
			console.log("this value is greater than Y: " + arr[i]);
			count++;
		}
	}
	console.log("Total number of values that are greater than Y: " + count);
}
// var arr = [1, 3, 2, 5, 4];
// greater_than_y(arr, 2);

/* ========================================================================== */
// Zero Out Negative Numbers
// Return the given array, after setting any negative
// values to zero.

function zero_out_negative(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}
// var arr = [-1, 2, -3, 4, -5];
// console.log(zero_out_negative(arr));

/* ========================================================================== */
// Max, Min, Average
// Given an array, print the max, min, and average
// values for that array.

function max_min_avg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	var avg;
	for (var i = 1, j = arr.length; i < j; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	avg = sum / arr.length;
	console.log("Max: " + max);
	console.log("Min: " + min);
	console.log("Average: " + avg);
}
// var arr = [1, 2, 3, 4, 5, 6];
// max_min_avg(arr);


/* ========================================================================== */
// Shift Array Values
// Given an array, move all values forward by one
// index, dropping the first and leaving a '0' value
// at the end.

function shift_array(arr) {
	for (var i = 0, j = arr.length - 1; i < j; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = 0;
}
// var arr = [1, 2, 3, 4, 5, 6];
// shift_array(arr);
// console.log(arr);

/* ========================================================================== */
// Swap String For Array Negative Values
// Given an array of numbers, replace any negative
// values with the string 'Dojo'.

function swap_negative_to_string(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo';
		}
	}
}
// var arr = [1, -2, 3, -4, 5, -6];
// swap_negative_to_string(arr);
// console.log(arr);

/* ========================================================================== */
