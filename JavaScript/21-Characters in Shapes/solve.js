function countCharacters(arr) {
	let count;
    if (arr.length === 0) {
        count = 0;
        return count;
    } else {
        count = arr.length * arr[0].length;
        return count;
    }
}