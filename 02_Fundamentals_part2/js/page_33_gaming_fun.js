/* ========================================================================== */

function rollOne() {
	return Math.floor(Math.random() * 6) + 1;
}
// rollOne();

/* ========================================================================== */

function playFives(num) {
	for (var i = 0; i < num; i++) {
		var roll = rollOne();
		console.log(`\nYou just rolled ${ roll }!`);
		if (roll == 5) {
			console.log(`That's good luck!`);
		}
	}
}
// playFives(6);

/* ========================================================================== */

function playStatistics() {
	var min = 7;
	var max = 0;

	for (var i = 0; i < 8; i++) {
		var roll = rollOne();

		if (roll > max) {
			max = roll;
		}
		if (roll < min) {
			min = roll;
		}
	}

	console.log(`The lowest roll is ${ min }.`);
	console.log(`The highest roll is ${ max }.`);
}
// playStatistics();

/* ========================================================================== */

function playStatistics2() {
	var min = 7;
	var max = 0;
	var sum = 0;

	for (var i = 0; i < 8; i++) {
		var roll = rollOne();

		if (roll > max) {
			max = roll;
		}
		if (roll < min) {
			min = roll;
		}

		sum += roll;
	}

	console.log(`The lowest roll is ${ min }.`);
	console.log(`The highest roll is ${ max }.`);
	console.log(`The total sum of all eight rolls is ${ sum }.`);
}
// playStatistics2();

/* ========================================================================== */

function playStatistics3(num) {
	var min = 7;
	var max = 0;
	var sum = 0;

	for (var i = 0; i < num; i++) {
		var roll = rollOne();

		if (roll > max) {
			max = roll;
		}
		if (roll < min) {
			min = roll;
		}

		sum += roll;
	}

	console.log(`The lowest roll is ${ min }.`);
	console.log(`The highest roll is ${ max }.`);
	console.log(`The total sum of all ${ num } rolls is ${ sum }.`);
}
// playStatistics3(5);

/* ========================================================================== */

function playStatistics4(num) {
	var min = 7;
	var max = 0;
	var sum = 0;
	var avg;

	for (var i = 0; i < num; i++) {
		var roll = rollOne();

		if (roll > max) {
			max = roll;
		}
		if (roll < min) {
			min = roll;
		}

		sum += roll;
	}

	avg = Math.round((sum / num) * 10) * 0.1;

	console.log(`The lowest roll is ${ min }.`);
	console.log(`The highest roll is ${ max }.`);
	console.log(`The average roll of ${ num } rolls is ${ avg }.`);
}
// playStatistics4(100);

/* ========================================================================== */
