// used to store key value pairs
// Built in implementation of hash tables in JS are - Objects & Maps

// hash function
function hash(key, arrayLength){
    let total = 0;

    for(let char of key){
        let value = char.charCodeAt(0) - 96;     // map "a" to 1, "b" to 2...
        total = (total + value) % arrayLength;
    }
    return total;
}