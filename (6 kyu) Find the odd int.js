function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let char = A[i];
        let arr = A.filter(number => number == char);
        if (arr.length % 2 !== 0) {
            return char;
        }
    }
}

console.log(findOdd([1, 1, 2, 3, 3, 3, 3]))  // 2