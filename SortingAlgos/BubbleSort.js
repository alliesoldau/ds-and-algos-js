// a sorting algorithm where the largest values bubble up to the top
// O(n^2) time complexity
// O(n) time complexity if we use noSwap and the data is very nearly sorted

// how to swap values
// function sway(arr, idx1, idx2) {
//     let temp = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp
// }

function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        // if you go thru it and don't need to swap anything then you can stop going through the loop
        // because you know you won't need to swap anything in the next loops either
        if (noSwaps) break
    }
    console.log(arr)
    return arr
}

bubbleSort([37, 45, 29, 8])