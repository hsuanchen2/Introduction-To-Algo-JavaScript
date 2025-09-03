/**
 * arr is an array to be sorted
 * n is the length of the array
 * order by asc
 */

const insertionSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;
    while (arr[j] > current && j >= 0) {
      arr[j + 1] = arr[j];
      arr[j] = current;
      j--;
    }
  }
  return arr;
};

// 1. Already sorted array
console.log(insertionSort([1, 2, 3, 4, 5], 5));
// Expected: [1, 2, 3, 4, 5]

// 2. Reverse sorted array
console.log(insertionSort([5, 4, 3, 2, 1], 5));
// Expected: [1, 2, 3, 4, 5]

// 3. Random unsorted array
console.log(insertionSort([9, 3, 1, 5, 4], 5));
// Expected: [1, 3, 4, 5, 9]

// 4. Array with duplicates
console.log(insertionSort([4, 2, 2, 8, 5, 2], 6));
// Expected: [2, 2, 2, 4, 5, 8]

// 5. Array with one element
console.log(insertionSort([42], 1));
// Expected: [42]

// 6. Empty array
console.log(insertionSort([], 0));
// Expected: []

// 7. Negative numbers
console.log(insertionSort([-3, -1, -7, 2, 0], 5));
// Expected: [-7, -3, -1, 0, 2]

// 8. Mixed large and small numbers
console.log(insertionSort([1000, -50, 3, 999, -1111], 5));
// Expected: [-1111, -50, 3, 999, 1000]
