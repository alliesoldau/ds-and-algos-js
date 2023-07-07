// exploits the fact that arrays of 0 or 1 elements are always sorted
// works by selecting 1 element (called the "pivot") and finding the index where the pivot should end up in the sorted file

// O(n^2) time complexity IF the array was already sorted and we picked the first/last element in the array as the pivot
// O(nlogn) time complexity IF the array wasn't already sorted
    // we can increase our chances of avoiding O(n^2) by not using this with sorted arrays OR by chosing a random pivot point so that 
    // we don't just return 1 value each run through

// pivot helper function
function pivot(arr, start = 0) {
    // swap helper function
    function swap(array, i , j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    // pick a pivot pt --> we're choosing to always start with the first element
    let pivot = arr[start]
    // this is like the counter that keeps track of how many times swaps occured
    let swapIdx = start
    // if you find an element thats smaller than the pivot, incremement swapIdx and swap the 2 elements
    // note: we're not moving the first element yet, that comes after we've sorted all elemenets into
    // a left side that is less than arr[start] and a right side that is greater than arr[start]
    for(let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    // now we move the starter element into it's correct position
    swap(arr, start, swapIdx)
    return swapIdx 
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // until the pointers meet in the middle...
    if (left < right) {
        let pivotIndex = pivot(arr, left)
        // left side
        quickSort(arr, left, pivotIndex - 1)
        // right side
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([4,6,9,1,-4,100,-76,76,8,18,2,5,3]))
