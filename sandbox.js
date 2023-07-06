// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
    let newArr = []
    for (let val of arr) {
        if (Array.isArray(val)) {
            newArr = newArr.concat(flatten(val)) 
        } else {
            newArr.push(val)
        }
    }
    return newArr
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]