function sum(arr) {
	let count = 0;
    let total = 0;
    let totalSum = 0;

    if (arr.length === 0) return 0;
    count += arr[0];
    total += sum(arr.slice(1));

    totalSum = count + total;
    return totalSum;
}