let array = [3, 2, 13, 20, 8, 2, 0, 652, 1, 8, 5, 1, 0, 6, 98]

function merge(arr1, arr2) {
	let sorted = []
	while (arr1.length != 0 && arr2.length != 0) {
		if (arr1[0] <= arr2[0]) {
			sorted.push(arr1[0])
			arr1.shift()
		} else {
			sorted.push(arr2[0])
			arr2.shift()
		}
	}
	if (arr1.length == 0) {
		arr2.forEach((element) => {
			sorted.push(element)
		})
	} else {
		arr1.forEach((element) => {
			sorted.push(element)
		})
	}
	return sorted
}

function mergeSort(arr) {
	if (arr.length == 1) {
		return arr
	} else {
		let low = 0
		let high = arr.length - 1
		let mid = Math.floor(high / 2)
		let left = arr.slice(low, mid + 1)
		let right = arr.slice(mid + 1, high + 1)
		let leftSorted = mergeSort(left)
		let rightSorted = mergeSort(right)
		return merge(leftSorted, rightSorted)
	}
}

console.log(mergeSort(array))

//a
