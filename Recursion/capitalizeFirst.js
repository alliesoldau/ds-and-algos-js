// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.



// NEED TO UNDERSTAND THIS BETTER

function capitalizeFirst(arr) {
    
    let newArr = []
    let newString = arr[0][0].toUpperCase() + arr[0].slice(1)
    if (arr.length === 1) return newString
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)))
    newArr.unshift(newString)
    return newArr

}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']