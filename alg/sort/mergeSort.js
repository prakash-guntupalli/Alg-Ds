
function mergeArrays(arr1, arr2) {
    let result = [];
    let x = 0;
    let y = 0;

    while(x < arr1.length && y < arr2.length){
        
        if(arr1[x] < arr2[y]){
            
            result.push(arr1[x]);
            x++;
        } else {
            result.push(arr2[y]);
            y++;
        }

    }

    while(x < arr1.length){
        result.push(arr1[x]);
        x++;
    }

    while(y < arr2.length){
        result.push(arr2[y]);
        y++;
    }

    return result
}




mergeArrays([1,5,8], [2,3,4,7])