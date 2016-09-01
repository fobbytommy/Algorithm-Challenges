/* ========================================================================== */
/*	Countdown
		Create a function that accepts a number as an input.
		Return a new array that counts down by one, from
		the	number (as array's 'zero'th element) down to 0
		(as the last element). How long is this array?	*/

// function countdown(num) {
// 	if (typeof(num) != "number") {
// 		return null;
// 	}
//
// 	var arr = [];
//
// 	for (num; num >= 0; num--) {
// 		arr.push(num);
// 	}
//
// 	return arr;
// }
//
// var result_1 = countdown(5);
// console.log(result_1);
// console.log("The length of this array is " + result_1.length);

/* ========================================================================== */
/*	Print and Return
		Your function will receive an array with two numbers.
		Print the first value, and return the second.	*/

// function print_and_return(arr) {
// 	 if (arr.length < 2) {
// 		 return null;
// 	 }
//
// 	 console.log(arr[0]);
// 	 return arr[1];
// }
//
// var result_2 = print_and_return([1, 2]);
// console.log(result_2);

/* ========================================================================== */
/*	First Plus Length
		Given an array, return the sum of the first value in the array,
		plus the array's length. What happens if th array's first value
		is not a number, but a string (like 'what'?) or a boolean
		(like false).	*/

// function first_plus_length(arr) {
// 	return arr[0] + arr.length;
// }
//
// var result_3 = first_plus_length([3, 2, 4]);
// console.log(result_3);

/* ========================================================================== */
/*	Values Greater than Second
		For [1, 3, 5, 7, 9, 13], print values that are greater than
		its 2nd value. Return how many values this is.	*/

// function greater_than_second(arr) {
// 	var count = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > arr[1]) {
// 			console.log(arr[i]);
// 			count++;
// 		}
// 	}
// 	return count;
// }
//
// var result_4 = greater_than_second([1, 3, 5, 7, 9, 13]);
// console.log("There are " + result_4 + " values that are greater than its 2nd value.");

/* ========================================================================== */
/*	Values Greater than Second, Generalized
		Write a function that accepts any array, and returns a new
		array with the array values that are greater that its
		2nd value. Print how manuy value this is. What will you do
		if the array is only one element long?	*/

// function greater_than_second_generalized(arr) {
// 	if (arr.length == 0) {
// 		return null;
// 	}
// 	var count = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] > arr[1]) {
// 			console.log(arr[i]);
// 			count++;
// 		}
// 	}
// 	return count;
// }
// var arr = [1, 5, 3, 2, 6, 3, 7, 0, 10];
// var result_5 = greater_than_second_generalized(arr);
// console.log("There are " + result_4 + " values that are greater than its 2nd value.");

/* ========================================================================== */
/*	This Length, That Value
		Given two numbers, return array of length num1 with each
		value num2. Print 'Jinx!' if they are same.	*/

// function this_length_value(num1, num2) {
// 	if (num1 === num2) {
// 		console.log("Jinx!");
// 	}
//
// 	var arr = [];
//
// 	for (var i = 0; i < num1; i++) {
// 		arr.push(num2);
// 	}
//
// 	return arr;
// }
//
// var result_6 = this_length_value(2, 3);
// console.log(result_5);

/* ========================================================================== */
/*	Fit the First Value
		Your function should accept an array. If value at [0] is
		greater than array's length, print 'Too big!'; if value
		at [0] is less than array's length, print 'Too small!';
		otherwise print 'Just right!'.	*/

// function fit_first_value(arr) {
// 	if (arr instanceof Array) {
// 		var array_length = arr.length;
// 		if (arr[0] > array_length) {
// 			console.log('Too big');
// 		}
// 		else if (arr[0] < array_length) {
// 			console.log('Too small');
// 		}
// 		else {
// 			console.log('Just right');
// 		}
// 	}
// 	else {
// 		console.log('the argument is not an array');
// 	}
// }
// var arr = [5, 4, 5, 2];
// fit_first_value(arr);


/* ========================================================================== */
/*	Fahrenheit to Celsius
		Kelvin wants to convert between temperature scales.
		Create fahrenheitToCelsius(fDegrees) that accepts a number
		of degrees in Fahrenheit, and returns the equivalent
		temperature as expressed in Celsius degrees.
		For review, Fahrenheit = (9/5 * Celsius) + 32.	*/

// function fahrenheitToCelsius(fDegrees) {
// 	if (typeof(fDegrees) == 'number') {
// 		return (5 / 9) * (fDegrees - 32);
// 	}
// 	else {
// 		return null;
// 	}
// }
// var result_8 = fahrenheitToCelsius(80);
// console.log(result_8);

/* ========================================================================== */
/*	Celsius to Fahrenheit
		Create celsiusToFahrenheit(cDegrees) that accepts number of
		degrees Celsius, and return the equivalent temperature
		expressed in Fahrenheit degrees.	*/

// function celsiusToFahrenheit(cDegrees) {
// 	if (typeof(cDegrees) == 'number') {
// 		return ((9 / 5) * cDegrees) + 32;
// 	}
// 	else {
// 		return null;
// 	}
// }
// var result_9 = celsiusToFahrenheit(26);
// console.log(result_9);

/*		(optional) Do Fahrenheit and Celsius values equate at a certain
		number? Scientific calculation can be complex, so for this
		challenge just try a series of Celsius integer values starting
		at 200, going downward (descending), checking whether it is
		equal to the corresponding Fahrenheight value.	*/

function when_degrees_meet(cDegrees) {
	if (typeof(cDegrees) == 'number') {
		while (cDegrees || cDegrees == 0) {
			var fDegrees = Math.round(((9 / 5) * cDegrees) + 32);
			console.log(cDegrees, fDegrees);
			if (cDegrees === fDegrees) {
				return fDegrees;
			}
			cDegrees--;
		}
	}
	else {
		return null;
	}
}
var result_10 = when_degrees_meet(200);
console.log("They meet at " + result_10);

/* ========================================================================== */
