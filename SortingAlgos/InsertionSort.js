// builds up the sort by gradually creating a larger left portion which is always sorted

// start by picking the 2nd element in the array
// now compare the 2nd element wiht the 1 before it and swap if necessary
// continue to the next element and if it is in the incorrect order, 
// iterate through the sorted portion (i.e. the left side) to place the element in the correct place

// O(n^2) time complexity
// O(n) time complexity if our data is almost all sorted
// works well if you have sorted data and then you have a piece of new data that comes in and you need to sort it at a moments notice

// O(1) space complexity

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    console.log(arr)
    return arr
}

insertionSort([2,1,9,76,4])