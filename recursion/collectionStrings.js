// collect strings from given object and return in array 

function collectStrings(obj){
    let arr = [];
    for(let key in obj){
        if(typeof(obj[key]) === "string"){
            arr.push(obj[key]);
        } else {
            arr = arr.concat(collectStrings(obj[key]));
        }
    }
    return arr;
}


var obj1 = {
    stuff: "foo",
    one : 1,
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj1);   // ["foo", "bar", "baz"]