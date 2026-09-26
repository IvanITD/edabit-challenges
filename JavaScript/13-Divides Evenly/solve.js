function dividesEvenly(a, b) {
	let evenDivision = a % b;
    
    if (evenDivision === 0) {
        return true;
    } else {
        return false;
    }
}