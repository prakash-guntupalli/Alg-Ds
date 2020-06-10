// While iterationg pick the element & insert it in correct position to the left. 
// In the array, keep left side of current element sorted. 


function insertionSort(arr){

    for(var i = 0; i < arr.length; i++){

        var current = arr[i];
        
        for(var j = i-1; j >= 0 && arr[j]> current; j--){  
            //shift the current j to left side
            arr[j+1] = arr[j];            
        }
        //if the loop breaks when arr[j] <= current then stop the current j position
        arr[j+1] = current;
    }

    return arr;

}

//insertionSort([2,5,4,7,3,8,1]) => [1,2,3,4,5,7,8]

// 1st step = [2,5,4,7,3,8,1]
// 2nd step = [2,4,5,7,3,8,1]
// 3rd step = [2,4,5,7,3,8,1]
// 4th step = [2,3,4,5,7,8,1]
// 5th step = [2,3,4,5,7,8,1]
// 6th step = [1,2,3,4,5,7,8]


//time complexity : O(n^2)
//space complexity: O(1)