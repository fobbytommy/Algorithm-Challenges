/* ========================================================================== */
// Biggie Size

// function makeItBig(arr) {
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (arr[i] > 0) {
// 			arr[i] = "big";
// 		}
// 	}
// 	return arr;
// }
// var arr = [-1, 3, 5, -5];
// console.log(makeItBig(arr));

/* ========================================================================== */
// Print Low, Return High

// function print_low_return_high(arr) {
// 	var low = arr[0];
// 	var high = arr[0];
// 	for (var i = 1, j = arr.length; i < j; i++) {
// 		if (arr[i] < low) {
// 			low = arr[i];
// 		}
// 		else if (arr[i] > high) {
// 			high = arr[i];
// 		}
// 	}
// 	console.log(low);
// 	return high;
// }
// var arr = [2, 3, 5, 3, 7, 2, -2, 0, 10];
// console.log(print_low_return_high(arr));

/* ========================================================================== */
// Print One, Return Another

// function print_one_return_another(arr) {
// 	if (arr.length < 2) {
// 		return null;
// 	}
// 	console.log(arr[arr.length-2]);
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (arr[i] % 2 == 1) {
// 			return arr[i];
// 		}
// 	}
// 	// if odd number is not found in the array.
// 	return null;
// }
// var arr = [2, 4, 6, 8, 3, 6, 10];
// console.log(print_one_return_another(arr));

/* ========================================================================== */
// Double Vision

// function double(arr) {
// 	var new_arr = [];
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		new_arr.push(arr[i] * 2);
// 	}
// 	return new_arr;
// }
// var arr = [0, 2, 1, 3, -4];
// console.log(double(arr));

/* ========================================================================== */
// Count Positives

// function countPositives(arr) {
// 	var count = 0;
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (arr[i] > 0 ) {
// 			count++;
// 		}
// 	}
// 	arr[arr.length-1] = count;
// 	return arr;
// }
// var arr = [-1, 1, 1, 1, 1];
// console.log(countPositives(arr));

/* ========================================================================== */
// Evens and Odds

// function evens_odds(arr) {
// 	var odd = 0;
// 	var even = 0;
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (arr[i] % 2 == 1) {
// 			odd++;
// 			even = 0;
// 		}
// 		else if (arr[i] % 2 == 0) {
// 			even++;
// 			odd = 0;
// 		}
// 		if (odd == 3) {
// 			console.log("That's odd!");
// 			odd = 0;
// 		}
// 		else if (even == 3) {
// 			console.log("Even more so!");
// 			even = 0;
// 		}
// 	}
// }
// var arr = [1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 8, 8];
// evens_odds(arr);

/* ========================================================================== */
// Increment the Seconds

function increment_seconds(arr) {
	for (var i = 1, j = arr.length; i < j; i += 2) {
		console.log(++arr[i]);
	}
	return arr;
}
var arr = [2, 3, 6, 7, 1, -1];
console.log(increment_seconds(arr));

/* ========================================================================== */
