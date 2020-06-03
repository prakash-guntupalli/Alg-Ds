// identifying pivot element index
// swap it to the appropriate position at the end

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;                  //it acts like counter to find the no of smaller elements than pivot
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  }

//pivot([4,8,2,1,5,7,6,3]) => 3
//step1 = [4,8,2,1,5,7,6,3]
//step2 = [4,2,8,1,5,7,6,3]
//step3 = [4,2,8,1,5,7,6,3]
//step4 = [4,2,1,8,5,7,6,3]
//step5 = [4,2,1,3,5,7,6,8]
//step5 = [3,2,1,4,5,7,6,8]


function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){                             //base condition when the loop should end
        let pivotIndex = pivot(arr, left, right); //pivot position is returned
        quickSort(arr, left, pivotIndex - 1);     //left side array of the pivot element is sorted
        quickSort(arr, pivotIndex + 1, right);    //right side array of the pivot is sorted
    }
    return arr; //sorted array is returned
}

//quickSort([4,8,2,1,5,7,6,3])  => [1.2.3.4.5.6.7]