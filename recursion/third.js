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