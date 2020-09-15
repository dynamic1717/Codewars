function incrementString (strng) {
    let num = strng.replace(/[^0-9]/g, "");
    let add = +num + 1;
    let addLength = add.toString().length;
    let result;
    if (num.length > addLength) {
        let start = "";
        for (let i = 0; i < num.length - addLength; i++) {
            start += num[i];
        }
        result =  start + add;
    } else {
        result = add;
    }
    return strng.replace(num, "") + result;
}

console.log(incrementString('foo9'))  // foobar10
console.log(incrementString('foo0042'))  // foo0043
console.log(incrementString('foo99'))  // foo100