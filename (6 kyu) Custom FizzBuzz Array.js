var fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
    const arr = []
    for(let i = 1; i < 100; i++) {
      if (i % numOne === 0 && i % numTwo === 0) {
        arr.push(stringOne + stringTwo)
      } else if (i % numOne === 0) {
        arr.push(stringOne)
      } else if (i % numTwo === 0) {
        arr.push(stringTwo)
      } else {
        arr.push(i)
      }
    }
    return arr
}

console.log(fizzBuzzCustom()[15])                       // 16
console.log(fizzBuzzCustom()[44])                       //  "FizzBuzz" (45 is divisible by 3 and 5)
console.log(fizzBuzzCustom('Hey', 'There')[25])         //  26
console.log(fizzBuzzCustom('Hey', 'There')[11])         //  "Hey" (12 is divisible by 3)
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80]) //  "What's " (81 is divisible by 3)