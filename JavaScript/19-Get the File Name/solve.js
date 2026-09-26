function getFilename(path) {
	let fileName = path.lastIndexOf("/");
    let result = path.substring(fileName + 1);
    return result;
}