function calculate(num1, num2, op) {
	let result = 0;

    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num1 / num2;
    } else if (op === "%") {
        result = num1 % num2;
    }

    return result;
}