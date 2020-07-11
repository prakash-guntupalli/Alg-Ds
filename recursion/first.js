// Call same function multiple times with different input
// two essential parts of a recusrsive function - Base case, Different input
// base case condition & returning values are common mistakes


function countDown(num){
    if(num <= 0){
        console.log("END");
        return;
    }
    num--;
    countDown(num);
}

// count down function without recursion
// fucntion countDown(num){
    
//     for(var i=num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("END");
// }


countDown(3);   //3,2,1  END



function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(3); //6 => 3 + sumRange(2)
                 // 3 + 2 + sumRange(1)
                 // 3 + 2 + 1