function digital_root(n) {
    let result = n;
    do {
        result = String(result).split("").reduce((sum, current) => Number(sum) + Number(current), 0);
    } while (String(result).length !== 1);
    return result;
}

console.log(digital_root(942))  // 6 --> 9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digital_root(493193))  // 2 -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2