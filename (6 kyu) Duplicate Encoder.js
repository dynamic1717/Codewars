function duplicateEncode(word){
    let arr = word.toLowerCase().split("");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr.filter(item => item == arr[i]).length) > 1) {
            result.push(")");
        } else {
            result.push("(");
        }
    }
    return result.join("");
}

console.log(duplicateEncode('din'))  // (((
console.log(duplicateEncode('recede'))  // ()()()
console.log(duplicateEncode('Success'))  // )())())