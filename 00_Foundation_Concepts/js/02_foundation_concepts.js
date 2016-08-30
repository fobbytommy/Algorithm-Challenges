/*============================================================================*/
/*	 You Say It's Your Birthday
	 	If 2 given numbers represent your birth month
		and day in either order, log "How did you
		know?", else log "Just another day..." 	*/

// var month = 12;
// var birthday = 18;
//
// if (month == 12 && birthday == 18) {
// 	console.log("How did you know?");
// }
// else {
// 	console.log("Just another day...");
// }

/*============================================================================*/
/*	 Leap Year
	 	Write a function that determines whether a given
		year is a leap year. If a year is divisible by four,
		it is a leap year, unless it is divisible by 100.
		However, if it is divisible by 400, then it is.	*/

// var year = 2016;
//
// if (year % 4 == 0) {
// 	if (year % 100 == 0 && year % 400 != 0) {
// 		console.log(year + " is not a leap year.");
// 	}
// 	else {
// 		console.log(year + " is a leap year.");
// 	}
// }
// else {
// 	console.log(year + " is not a leap year.");
// }

/*============================================================================*/
/* 	Print and Count
	 	Print all interger multiples of 5, from 512 to 4096.
		Afterward, also log how many there were.	*/

// var count = 0;
// for (var i = 512; i <= 4096; i++) {
// 	if (i % 5 == 0) {
// 		count++;
// 		console.log(i);
// 	}
// }
// console.log("There are " + count + " multiples of 5, from 512 to 4096.");

/*============================================================================*/
/* 	Multiples of Six
	 	Print multiples of 6 up to 60,000, using a WHILE.	*/

// var num = 0;
// while (num <= 60000) {
// 	if (num % 6 == 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

/*============================================================================*/
/* 	Counting, the Dojo Way
		Print integers 1 to 100. If divisible by 5, print
		"Coding" instead. If by 10, also print " Dojo".	*/

for (var i = 1; i <= 100; i++) {
	if (i % 5 == 0) {
		if (i % 10 == 0) {
			console.log("Coding Dojo");
		}
		else {
			console.log("Coding");
		}
	}
}
