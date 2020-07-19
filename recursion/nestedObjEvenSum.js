function nestedEvenSum(obj, sum=0){
    for(item in obj){
        if(typeof(obj[item]) === 'object'){
            sum += nestedEvenSum(obj[item]);
        } else if(typeof(obj[item]) === 'number' && obj[item] % 2 === 0){
            sum += obj[item];
        }
    }
    return sum;
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj2);