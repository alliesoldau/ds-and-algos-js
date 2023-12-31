// HELPER METHOD RECURSION

function collectOddValues(arr) {
    
    let result = []

    function helper(helperInput){ // HERE IS OUR HELPER FUNCTION
        if (helperInput.length === 0) return
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helperInput(helperInput.slice(1))
    }

    helper(arr)

    return result
}


// PURE RECURSION

function collectOddValues(arr) {
    let newArr = []

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))

    return newArr
}