function search(arr, item) {
    let negativeResult = -1;
    
    for(let checker = 0; checker <= arr.length; checker++) {
        let searchedNumber = arr[checker];
        if (searchedNumber === item) {
            return checker;
        } else if (searchedNumber != item && checker >= arr.length) {
            return negativeResult;
        }
        searchedNumber = 0;
    }
}