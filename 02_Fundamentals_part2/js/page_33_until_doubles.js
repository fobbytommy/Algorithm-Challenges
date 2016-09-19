function until_doubles() {
	var min = 21;
	var max = 0;
	var sum = 0;
	var count = 0;
	var roll1;
	var roll2;

	while (true) {
		if (roll1 == undefined) {
			roll1 = Math.floor(Math.random() * 20) + 1;
			count++;
			sum += roll1;
		}
		if (roll2 == undefined) {
			roll2 = Math.floor(Math.random() * 20) + 1;
			count++;
			sum += roll2;
		}
		if (roll1 < min) {
			min = roll1;
		}
		if (roll1 > max) {
			max = roll2;
		}
		if (roll2 < min) {
			min = roll2;
		}
		if (roll2 > max) {
			max = roll2;
		}

		if (roll1 == roll2) {
			break;
		}

		roll1 = roll2;
		roll2 = Math.floor(Math.random() * 20) + 1;
		count++;
		sum += roll2;
	}

	avg = sum / count;

	console.log(`Number of rolls: ${ count }`);
	console.log(`Minium roll: ${ min }`);
	console.log(`Maximum roll: ${ max }`);
	console.log(`Average roll: ${ avg }`);
}
until_doubles();
