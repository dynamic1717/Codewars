function findOutlier(integers){
    let odd = integers.filter(item => item % 2)
    let even = integers.filter(item => !(item % 2))
    return odd.length === 1 ? +odd : +even
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))  // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))  // 160