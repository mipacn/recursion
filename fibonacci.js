function fibs(num) {
	let i = 0
	let j = 1
	let k
	let arr = []

	if (num == 1) {
		arr.push(0)
	} else if (num == 2) {
		arr.push(0)
		arr.push(1)
	} else if (num > 2) {
		arr.push(0)
		arr.push(1)
		for (k = 2; k < num; k++) {
			j = i + j
			arr.push(j)
			i = j - i
		}
	}
	console.log(arr)
}

function fibsRec(num, arr = [], k = 2, i = 0, j = 1) {
	if (num == 0) console.log(arr)
	else if (num == 1) {
		arr.push(0)
		console.log(arr)
	} else if (num == 2) {
		arr.push(0)
		arr.push(1)
		console.log(arr)
	} else {
		if (arr[0] == 0 && arr[1] == 1) {
			if (k == num) console.log(arr)
			else {
				j = i + j
				arr.push(j)
				i = j - i
				k++
				fibsRec(num, arr, k, i, j)
			}
		} else {
			arr.push(0)
			arr.push(1)
			fibsRec(num, arr, k, i, j)
		}
	}
}

fibs(78)
fibsRec(78)
