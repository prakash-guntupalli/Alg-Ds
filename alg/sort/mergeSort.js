// merge the small arrays while sorting the elements
function mergeArrays(arr1, arr2) {
    let result = [];
    let x = 0;
    let y = 0;

    while(x < arr1.length && y < arr2.length){
        if(arr1[x] < arr2[y]){
            result.push(arr1[x]);
            x++;
        } else {
            result.push(arr2[y]);
            y++;
        }
    }

    while(x < arr1.length){
        result.push(arr1[x]);
        x++;
    }

    while(y < arr2.length){
        result.push(arr2[y]);
        y++;
    }

    return result
}


// split the given array into single elements
function mergeSort(arr){

    if (arr.length <= 1) return arr;

    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));

    return mergeArrays(left, right);
}


mergeSort([1,5,8,2,3,4,7])