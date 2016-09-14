/* ========================================================================== */
// Only Keep the Last Few

// function keepLastFew(arr, num) {
// 	if (arr.length < num) {
// 		return null;
// 	}
// 	var idx = arr.length - num;
// 	for (var i = 0, j = num; i < j; i++) {
// 		arr[i] = arr[idx + i];
// 	}
// 	for (var i = 0; i < idx; i++) {
// 		arr.pop();
// 	}
// 	return arr;
// }
// var arr = [2, 4, 6, 8, 10];
// console.log(keepLastFew(arr, 3));

/* ========================================================================== */
// Math Help

// function xIntercept(M, B) {
// 	if (typeof(M) != 'number' || typeof(B) != 'number') {
// 		return null;
// 	}
// 	return (-B / M);
// }
//
// console.log(xIntercept(1, 3));


/* ========================================================================== */
// Poor Kenny

// function whatHappensToday() {
// 	var disaster_num = Math.floor(Math.random() * 100) + 1;
// 	if (disaster_num > 0 && disaster_num <= 10) {
// 		console.log('volcano');
// 	}
// 	else if (disaster_num > 10 && disaster_num <= 25) {
// 		console.log('tsunami');
// 	}
// 	else if (disaster_num > 25 && disaster_num <= 45) {
// 		console.log('earthquake');
// 	}
// 	else if (disaster_num > 45 && disaster_num <= 70) {
// 		console.log('blizzard');
// 	}
// 	else if (disaster_num > 70 && disaster_num <= 100) {
// 		console.log('meteor strike');
// 	}
// }
//
// whatHappensToday();

/* ========================================================================== */
// What Really Happened?

// function whatReallyHappensToday() {
// 	var diaster_count = 0;
// 	var chance = Math.floor(Math.random() * 100) + 1;
// 	if (chance > 0 && chance <= 10) {
// 		console.log('volcano');
// 		diaster_count++;
// 	}
// 	chance = Math.floor(Math.random() * 100) + 1;
// 	if (chance > 0 && chance <= 15) {
// 		console.log('tsunami');
// 		diaster_count++;
// 	}
// 	chance = Math.floor(Math.random() * 100) + 1;
// 	if (chance > 0 && chance <= 20) {
// 		console.log('earthquake');
// 		diaster_count++;
// 	}
// 	chance = Math.floor(Math.random() * 100) + 1;
// 	if (chance > 0 && chance <= 25) {
// 		console.log('blizzard');
// 		diaster_count++;
// 	}
// 	chance = Math.floor(Math.random() * 100) + 1;
// 	if (chance > 0 && chance <= 30) {
// 		console.log('meteor strike');
// 		diaster_count++;
// 	}
// 	if (diaster_count == 0) {
// 		console.log('nothing happend. Kenny will survive!');
// 	}
// }
// whatReallyHappensToday();

/* ========================================================================== */
// Soaring IQ

// function soaringIQ(iq) {
// 	for (var i = 1, j = 98; i <= 98; i++) {
// 		var increase = (i + 10000) * 0.0001;
// 		iq *= increase;
// 	}
// 	return Math.round(iq);
// }
//
// console.log(soaringIQ(101));

/* ========================================================================== */
// Letter Grade

// function letterGrade(score) {
// 	if (typeof(score) != 'number' || score > 100 || score < 0) {
// 		return null;
// 	}
// 	if (score >= 90) {
// 		console.log("Grade: A");
// 	}
// 	else if (score >= 80) {
// 		console.log("Grade: B");
// 	}
// 	else if (score >= 70) {
// 		console.log("Grade: C");
// 	}
// 	else if (score >= 60) {
// 		console.log("Grade: D");
// 	}
// 	else {
// 		console.log("Grade: F")
// 	}
// }
// letterGrade(99);

/* ========================================================================== */
// More Accurate Grades

function accurateGrade(score) {
	if (typeof(score) != 'number' || score > 100 || score < 0) {
		return null;
	}
	if (score >= 90) {
		if (score >= 98) {
			console.log("Grade: A+");
		}
		else if (score <= 92) {
			console.log("Grade: A-");
		}
		else {
			console.log("Grade: A");
		}
	}
	else if (score >= 80) {
		if (score >= 88) {
			console.log("Grade: B+");
		}
		else if (score <= 82) {
			console.log("Grade: B-");
		}
		else {
			console.log("Grade: B");
		}
	}
	else if (score >= 70) {
		if (score >= 78) {
			console.log("Grade: C+");
		}
		else if (score <= 72) {
			console.log("Grade: C-");
		}
		else {
			console.log("Grade: C");
		}
	}
	else if (score >= 60) {
		if (score >= 68) {
			console.log("Grade: D+");
		}
		else if (score <= 62) {
			console.log("Grade: D-");
		}
		else {
			console.log("Grade: D");
		}
	}
	else {
		console.log("Grade: F")
	}
}
accurateGrade(99);

/* ========================================================================== */
