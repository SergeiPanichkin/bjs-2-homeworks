// Лекция 2. "ФУНКЦИИ".
// Задание N 1

function getArrayParams(...arr) {
  if (arr.length === 0) {
		return 0;
	}
  let min = max = sum = arr[0];
	let avg;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

// Задание N 2 (1)

function summElementsWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Задание N 2 (2)

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

// Задание N 2 (3)

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sumOddElement += arr[i];
			continue;
		}
		sumEvenElement += arr[i];
	}
	return sumEvenElement - sumOddElement;
}

// Задание N 2 (4)

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

// Задание N 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (maxWorkerResult < result) {
			maxWorkerResult = result
		}
	}
	return maxWorkerResult;
}
