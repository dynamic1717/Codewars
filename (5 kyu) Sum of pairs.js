var sum_pairs = function(arr, sum){
    let set = new Set();
    set.add(arr[0]);
    for (let i = 1; i < arr.length; ++i) {
        let need = sum - arr[i];
        if (set.has(need)) {
            return [need, arr[i]];
        }
        set.add(arr[i]);
    }
}
 
console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10)) // [3, 7]
console.log(sum_pairs([4, 3, 2, 3, 4], 6))  // [4, 2]