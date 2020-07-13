// recursively get product of given array numbers

function productArray(arr){
    if(arr.length === 1){
        return 1;
    }

    return arr[0] * productArray(arr.slice(1));

}

productArray([1,2,3,4,5,6]);    //120;




// calculate sum of numbers from 0 to given number

function recursiveRange(num){
    if(num === 1){
        return 1;
    }
    return num + recursiveRange(num-1);
 }
 
 recursiveRange(4); //10



 // fibonacci series

 function fib(num){
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
 }

 fib(10);       //55    (1,1,2,3,5,8,13,21,34,55)