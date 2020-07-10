// 4! => 4*3*2*1

// iterative method
function factorial(num){
    var total = 1;
    for(var i = num; i > 0; i--){
        total = total * i;
    }
    return total;
}



//recursive method
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num -1);
}


factorial(5);   //120