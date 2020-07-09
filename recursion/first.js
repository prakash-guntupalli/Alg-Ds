// Call same function multiple times with different input
// two essential parts of a recusrsive function - Base case, Different input


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