function spinWords(str){
    return str
    .split(" ")
    .map(function(word) {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        } else {
            return word;
        }
    })
    .join(" ");
}

console.log(spinWords('Hey fellow warriors'))  // Hey wollef sroirraw
console.log(spinWords('This is another test'))  // This is rehtona test