// searches each item one by one

// JS array methods - indexOf(), includes(), find(), findIndex()

function linearSearch(arr, val){

    for(var x= 0; x < arr.length; x++){

        if(arr[x] === val) return x;
        
    }
    return -1;

}

//linearSearch([12,3,4,8,10,5,9], 5)   =>  5
//linearSearch([12,3,4,8,10,5,9], 20)  => -1


// time complexity  - O(n) 
// space complexity - O(n)
