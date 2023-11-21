function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        val = arr[i]
        for (let j = i-1; j >= 0; j--) {
            if(arr[j] > val) {
                arr[j+1] = arr[j]
                arr[j] = val
            } else { break }
        }
    }

    return arr
}

module.exports = insertionSort;