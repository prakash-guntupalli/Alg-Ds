//helper function 1
//function to get specific digit on given index
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// getDigit(12345, 0) => 5
// getDigit(12345, 2) => 3



//helper function 2
//function to find number of digits in a given number
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//digitCount(245) => 3
//digitCount(13245) => 5



//helper function 3
//function to find maximum digits in the given array of numbers
function maxDigits(arr){
    let maxVal = 0;
    for(let i=0; i<arr.length; i++){
        maxVal = Math.max(maxVal, digitCount(arr[i]));
    }
    return maxVal;
}
//maxDigits([21, 123, 3, 75, 6729, 87]) => 4
