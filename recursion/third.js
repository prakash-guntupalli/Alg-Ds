// reverse a given string

function reverse(str){

        if(str.length === 1) return str;

        return reverse(str.slice(1)) + str[0];
    }
    
reverse("hello");

// return reverse("ello")               + "h"
//         reverse("llo")          + "e"
//          reverse("lo")     + "l"
//           reverse("o") + "l"
//              "o"
// "olleh"


// palindrome function - given string and its reverse are equal

function palindrome(str){
    
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return palindrome(str.slice(1, -1));   //truncate 1st & last
    return false;

}

palindrome("abcdqdcba");    //true


// function should accept array & callback as inputs, the function returns true if a single value in the array returns true when passed to callback.
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}


//const isOdd = val => val % 2 !== 0;
//someRecursive([1,2,3,4], isOdd)   => true



// flatten an array of arrays and return flattened array

function flatten(oldArr){
    var newArr = [];
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    } 
    return newArr;
  }
  
flatten([1,2,[41,[4,5,[6,7],8],11],9,10]);      //[1, 2, 41, 4, 5, 6, 7, 8, 11, 9, 10]
