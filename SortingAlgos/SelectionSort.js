// similar to bubble sort but instead of first placing large values into sorted position, it places small values into sorted position
// it goes thru the whole array, finds the smallest, then places it at the front. it doesn't do the swap until it reaches the
// end of the array

// O(N^2) time complexity
// selection sort is better than bubble sort for saving memory space

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    console.log(arr)
    return arr
}

selectionSort([34, 22, 10, 19, 17])