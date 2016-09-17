function sweatshirt(num) {
	var cost = 20; // cost of each sweatshirt
	var total_cost;

	if (num >= 4) { // if 4 or more, 35% discount
		total_cost = Math.round((num * cost) * (1 - 0.35));
	}
	else if (num == 3) { // else if 3, 19% discount
		total_cost = Math.round((num * cost) * (1 - 0.19));
	}
	else if (num == 2) { // else if 2, 9% discount
		total_cost = Math.round((num * cost) * (1 - 0.09));
	}
	else { // else 1, 0% discount
		total_cost = cost;
	}

	return total_cost;
}

console.log(sweatshirt(17));
