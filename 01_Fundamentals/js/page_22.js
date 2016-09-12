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

// function increment_seconds(arr) {
// 	for (var i = 1, j = arr.length; i < j; i += 2) {
// 		console.log(++arr[i]);
// 	}
// 	return arr;
// }
// var arr = [2, 3, 6, 7, 1, -1];
// console.log(increment_seconds(arr));

/* ========================================================================== */
// Previous Lengths

// function pre_lengths(arr) {
// 	var array_length = arr.length;
//
// 	if (array_length < 2) {
// 		return null;
// 	}
// 	var temp = arr[array_length - 1];
//
// 	for (var i = array_length - 1; i > 0; i--) {
// 		arr[i] = arr[i - 1].length;
// 	}
// 	arr[0] = temp.length;
// }
//
// var arr = ['hello', 'hi', 'greetings'];
// pre_lengths(arr);
// console.log(arr);

/* ========================================================================== */
// Add Seven to Most

// function seven_to_most(arr) {
// 	var new_arr = [];
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (i == 0) {
// 			new_arr.push(arr[i]);
// 		}
// 		else {
// 			new_arr.push(arr[i] + 7);
// 		}
// 	}
// 	return new_arr;
// }
//
// var arr = [1, 2, 3, 4];
// var result = seven_to_most(arr);
// console.log(result);

/* ========================================================================== */
// Reverse Array

// function reverse(arr) {
// 	for (var i = 0, j = Math.floor(arr.length / 2); i < j; i++) {
// 		var temp = arr[i];
// 		arr[i] = arr[arr.length - 1 - i];
// 		arr[arr.length - 1 - i] = temp;
// 	}
// 	return arr;
// }
//
// var arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr));

/* ========================================================================== */
// Outlook: Negative

// function negative(arr) {
// 	var new_arr = [];
// 	for (var i = 0, j = arr.length; i < j;  i++) {
// 		new_arr.push(arr[i]);
// 		if (new_arr[i] > 0) {
// 			new_arr[i] *= -1;
// 		}
// 	}
// 	return new_arr;
// }
// var arr = [1, -3, 5];
// console.log(negative(arr));

/* ========================================================================== */
//  Always Hungry

// function alwaysHungry(arr) {
// 	var count = 0;
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		if (arr[i] === "food") {
// 			console.log("yummy");
// 			count++;
// 		}
// 	}
// 	if (count === 0) {
// 		console.log("I'm hungry");
// 	}
// }
//
// var arr = ["food", 1, 5, "food", "hi"];
// var arr = ["ood", 1, 5, "foo", "hi"];
// alwaysHungry(arr);

/* ========================================================================== */
//  Swap Toward the Center

// function swapTowardtheCenter(arr) {
// 	var array_length = arr.length;
// 	for (var i = 0, j = Math.floor(array_length / 2); i < j; i++) {
// 		if (i % 2 == 0) {
// 			var temp = arr[i];
// 			arr[i] = arr[array_length - 1 - i];
// 			arr[array_length - 1 - i] = temp;
// 		}
// 	}
// }
// var arr = [true, 42, "Ada", 2, "pizza"];
// var arr = [1, 2, 3, 4, 5, 6];
// swapTowardtheCenter(arr);
// console.log(arr);

/* ========================================================================== */
//  Scale the Array

function scaleArray(arr, num) {
	for (var i = 0, j = arr.length; i < j; i++) {
		arr[i] *= num;
	}
	return arr;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(scaleArray(arr, 2));

/* ========================================================================== */
