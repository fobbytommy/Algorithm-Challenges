/*============================================================================*/
/*	 What Do You Know?
	 	Your function will be given an input parameter
		incoming. Please console.log this value.	*/

// function incoming(data) {
// 	console.log(data);
// }
// incoming("This is the data that's coming!");

/*============================================================================*/
/*	 Whoa, That Sucker's Huge...
	 	Add odd intergers from -300,000 to 300,000, and
		console.log the final sum. Is there a shortcut?	*/

// var sum = 0;
// for (var i = -300000; i <= 300000; i++) {
// 	if (i % 2 == 1 || i % 2 == -1) {
// 		sum += i;
// 	}
// }
// console.log(sum);

/*============================================================================*/
/* 	Countdown By Fours
	 	Log positive numbers starting at 2016, counting
		down by fours (exclude 0), without a FOR loop.	*/

// var num = 2016;
//
// while (num > 0) {
// 	console.log(num);
// 	num -= 4;
// }

/*============================================================================*/
/* 	Flexible Countdown
	 	Based on earlier "Countdown By Fours", given
		lowNum, highNum, mult, print multiples of mult
		from highNum down to lowNum, using a FOR.
		For (2, 9, 3), print 9 6 3 (on successive lines)	*/

// function flexibleCountdown(lowNum, highNum, mult) {
// 	var print_line = ""
// 	for (var i = highNum; i >= lowNum; i--) {
// 		if (i % mult == 0) {
// 			print_line += i + " ";
// 		}
// 	}
// 	console.log(print_line);
// }
//
// flexibleCountdown(1, 71, 3);

/*============================================================================*/
/* 	The Final Countdown
		This is based on "Flexible Countdown". The parameter names
		are not as helpful, but the problem is essentially identical;
		don't be thrown off! Given 4 parameters (param1, param2, param3,
		param4), print the multiples of param1, starting at param2
		and extending to param3. One exception: if a multiple is equal
		to param4, then skip (don't print) that one. Do this using a WHILE.
		Given (3, 5, 17, 9), print 6, 12, 15 (which are all of the
		multiples of 3 between 5 and 17, except for the value 9).	*/

function finalCountdown(param1, param2, param3, param4) {
	var i = param2;
	var print_line = "";
	while (i <= param3) {
		if (i % param1 == 0) {
			if (i != param4) {
				print_line += i + " ";
			}
		}
		i++;
	}
	console.log(print_line);
}

finalCountdown(2, 2, 16, 4);
