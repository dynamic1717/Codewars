function isValidWalk(walk) {
    let start = [0, 0];
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] == "n") {
            start[0] += 1;
        } else if (walk[i] == "s") {
            start[0] -= 1;
        } else if (walk[i] == "w") {
            start[1] += 1;
        } else if (walk[i] == "e") {
            start[1] -= 1;
        }
    }
    if (walk.length == 10 && start[0] == 0 && start[1] == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))  // true
console.log(isValidWalk(['w','e','n','s','w','e','n','s','s','s']))  // false