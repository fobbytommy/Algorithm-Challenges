/*============================================================================*/
/*	 Setting and Swapping
	 	Set myNumber to 42. Set myName to your name
	 	Now swap myNumber into myName & vice versa 	*/

// var myNumber = 42;
// var myName = "Tommy";
//
// var temp = myNumber;
// myNumber = myName;
// myName = temp;
//
// console.log("myNumber is", myNumber);
// console.log("myName is", myName);

/*============================================================================*/
/*	 Print -52 to 1066
	 	Print integers from -52 to 1066 using a FOR loop	*/

// for (var i = -52; i <= 1066; i++) {
// 	console.log(i);
// }

/*============================================================================*/
/* 	Don't Worry, Be Happy
	 	Create beCheerful(). Within it, console.log
	 	string "good morning!" Call it 98 times.	*/

// function beCheerful() {
// 	for (var i = 0; i < 98; i++) {
// 		console.log("good morning!");
// 	}
// }
//
// beCheerful();

/*============================================================================*/
/* 	Multiples of Three - but Not All
	 	Using FOR, print multiples of 3 from -300 to 0.
	 	Skip -3 and -6.		*/

// for (var i = -300; i <= 0; i += 3) {
// 	if (i == -3 || i == -6) {
// 		continue;
// 	}
// 	console.log(i);
// }

/*============================================================================*/
/* 	Printing Integers with While
		 Print integers from 2000 to 5280, using a WHILE	*/

var num = 2000;

while(num <= 5280) {
	console.log(num);
	num++;
}
