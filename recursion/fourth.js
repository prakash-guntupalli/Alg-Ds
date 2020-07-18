// capitalize 1st letter of each word in an array

// iterative way
function capitalizeFirst(arr){
    let newArr = [];
    if(arr.length < 1) return null;
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        if(temp){
            let newTemp = temp[0].toUpperCase().concat(temp.slice(1));
            newArr.push(newTemp);
        }
    }
    return newArr;
}


//recursive way
function capitalizeFirst (array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}


capitalizeFirst(["hello", "hai", "c-Dev"]);    // "Hello", "Hai", "C-Dev"