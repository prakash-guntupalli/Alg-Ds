// Largest values bubble up to the top(end)
// compare each element with adacent and swap

function bubbleSort(arr){
    //1st loop starts from ending element
    for (var i = arr.length; i > 0; i--){
        //2nd loop starts from 1st element till i value
        for(var j=0; j< i-1; j++){
            // compare with adjacent and if it is smaller, swap it
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        }
    }
    return arr;
}

//bubbleSort([2, 8, 5, 12, 9, -3]);  =>  [-3,2,5,8,9,12]

//time complexity => O(n^2);

// can be optimized by introducing a variable in cases when data is almost sorted & swap is not needed we can break the loop

// function bubbleSort(arr){
//     var noSwap;
//     for (var i = arr.length; i > 0; i--){
//         noSwap = true;
//         for(var j=0; j< i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 noSwap = false;
//             } 
//         }
//         if(noSwap) break;
//     }
//     return arr;
// }

//bubbleSort([8,1,2,3,4,5]); => [1,2,3,4,5,8]
