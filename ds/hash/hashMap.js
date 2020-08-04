// used to store key value pairs
// Built in implementation of hash tables in JS are - Objects & Maps

// hash function to store strings
function hash(key, arrayLength){
    let total = 0;

    for(let char of key){
        let value = char.charCodeAt(0) - 96;     // map "a" to 1, "b" to 2...
        total = (total + value) % arrayLength;
    }
    return total;
}



// improved hash function to store strings
// made use of prime number to spread values more uniformly

function hash(key, arrayLength){
    let total = 0;
    let RANDOM_PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){ //if it is large key consider 1st 100 chars
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * RANDOM_PRIME + value) % arrayLength;
    }
    return total;

}

hash("hello", 11);  //6
hash("pink", 11);   //1
