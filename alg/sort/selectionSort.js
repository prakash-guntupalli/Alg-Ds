// consider 1st value as min and iterate through out the array if you find any value less than min then
// replace that index with min and swap those values.

function selectionSort(arr){

    for(var i = 0; i < arr.length; i++){
        var min = i;

        for(var j = i+1; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }

        if(i !== min){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}


//selectionSort([ 1, 2, 12, 8, 6, 16, 24]) => [1,2,6,8,12,16,24]


//time complexity : O(n^2)
//space complexity: O(1)