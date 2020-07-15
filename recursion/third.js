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