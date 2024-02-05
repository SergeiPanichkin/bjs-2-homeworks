"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let S = amount - contribution;
	let P = percent / 100 / 12;

	//Платёж = S * (P + (P / (((1 + P)^n) - 1)))
	let result = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalResult = result * countMonths;
	let totalAmount = totalResult.toFixed(2);
	let fixedTotalAmount = parseFloat(totalAmount);
	return fixedTotalAmount;
}