// works only if the input array is sorted 
// better than linear search, works on divide & conquer technique 


function binarySearch(arr, val){
    // create a left pointer at start of array
    var start = 0;
    // create a right pointer at end of an array
    var end = arr.length - 1;
    // create a pointer at the middle to compare & divide
    var middle = Math.floor((start + end)/2);

    while(arr[middle] !== val && start <= end){
        if(val < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    if(arr[middle] === val){
        return middle;
    }
    return -1;
}

// binarySearch([2,4,6,8,10,12,13,15], 8) =>  3

// Time complexity  =>  O(logn)