// exploits the fact that arrays of 0 or 1 elements are always sorted
// works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// O(nlogn) time explexity
// O(n) space complexity

// function to merge 2 sorted arrays 

function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    // this part runs only while we still haven't exhausted either array
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results 
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([10,24,76,73,72,1]))