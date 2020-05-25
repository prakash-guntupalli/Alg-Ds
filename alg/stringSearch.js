// To find a substring inside long string


function subString(org, mini){
    var count = 0;

    //loop over the original string
    for(var i = 0; i < org.length ; i++){
        //loop over the shorter string
        for(var j= 0; j < mini.length; j++){
            //if the characters don't match break out from inner loop
            //here j is fixed, so increment i
            if(mini[j] !== org[i+j]){
                break;
            }
            //we reached end of mini string,if you find a match in inner loop increment counter
            if(j === mini.length - 1){
                count++;
            }
        }
    }
    //return count
    return count > 0 ? count : -1;

}

//subString('jwaajfkdhomgajkhfomg', 'omg');