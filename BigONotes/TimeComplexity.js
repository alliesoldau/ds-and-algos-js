// roughly calculate the time it takes to perform a function

// this one is O(n) because it depends on how large n is
let t1Waster = performance.now()
function timeWaster(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}
timeWaster(11876)
let t2Waster = performance.now()
console.log((t2Waster - t1Waster)/1000, 'seconds elapsed for the WASTER fxn')

// this one is O(1) because no matter the n there are always 3 operations
let t1Saver = performance.now()
function timeSaver(n) {
    return n * (n + 1) / 2
}
timeSaver(11876)
let t2Saver = performance.now()
console.log((t2Saver - t1Saver)/1000, 'seconds elapsed for the SAVER fxn')