// identifying pivot element index
// swap it to the appropriate position at the end

function pivot(arr, start=0, end=arr.length){

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapidx = start;

    for(var i = swapidx + 1; i < end ; i++){

        if(pivot > arr[i]){
            swapidx++;
            swap(arr, swapidx, i)
        }

    }
    swap(arr, start, swapidx);
    return swapidx;
}

//pivot([4,8,2,1,5,7,6,3]) => 3
//step1 = [4,8,2,1,5,7,6,3]
//step2 = [4,2,8,1,5,7,6,3]
//step3 = [4,2,8,1,5,7,6,3]
//step4 = [4,2,1,8,5,7,6,3]
//step5 = [4,2,1,3,5,7,6,8]
//step5 = [3,2,1,4,5,7,6,8]