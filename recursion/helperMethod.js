// helper method is creating separate function to use recursion

function collectOddValues(arr){
    let results = [];   // an array to save odd value from input array
    
    function helper(helperInput){
        if(helperInput.length === 0) {  // base case
            return;
        }

        if(helperInput[0] % 2 !== 0){   // checks 1st element for odd
            results.push(helperInput[0]);
        }

        helper(helperInput.slice(1));   // removes 1st element
    }

    helper(arr);

    return results;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);