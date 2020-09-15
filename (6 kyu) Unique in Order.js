var uniqueInOrder = function(iterable){
    let uniqChar = iterable[0];
    if (uniqChar == undefined) {
      return [];
    }
    let uniqArr = [uniqChar];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== uniqChar) {
            uniqChar = iterable[i];
            uniqArr.push(uniqChar);
        }
    }
    return uniqArr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))  // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))  // [1, 2, 3]