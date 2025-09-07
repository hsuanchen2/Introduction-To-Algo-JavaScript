/**
 * Introduction.to.Algorithms.4th.Edition.2022.4
 */

/**
 * 2-1-1
 * INSERTION-SORT
 * arr is an array to be sorted
 * n is the length of the array
 * order by asc
 */

const insertionSortASC = (arr, n) => {
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

// console.log(insertionSortASC([31, 41, 59, 26, 41, 58], 6));

/**
 * 2-1-2
 * SUM ARRAY
 */

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// console.log(sumArray([31, 41, 59, 26, 41, 58]));

/**
 * 2-1-3
 * insertion sort but order desc
 */

const insertionSortDesc = (arr, n) => {
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (key > arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
// console.log(insertionSortDesc([5, 2, 9, 1, 5, 6], 6));
// console.log(insertionSortDesc([3, 3, 3, 3], 4));
// console.log(insertionSortDesc([-1, -5, 3, 0, 2], 5));

/**
 * 2-1-4
 * SEARCHING PROBLEM
 */

const search = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return null;
};

/**
 * 2-1-5
 * ADD TWO BINARY
 */

const addBinary = (arr1, arr2, n) => {
  // create an n + 1 length array filled with 0
  const cArray = new Array(n + 1).fill(0);
  let carry = 0;
  for (let i = 0; i < n; i++) {
    const sum = arr1[i] + arr2[i] + carry;
    if (sum > 1) {
      // 大於 1 的情況只會有 2 or 3, 也就是 10 or 11
      carry = 1;
      cArray[i] = sum % 2;
    } else {
      carry = 0;
      cArray[i] = sum % 2;
    }
  }
  cArray[n] = carry;
  return cArray;
};

// console.log(addBinary([1, 0, 0], [0, 1, 0], 3));
// console.log(addBinary([1, 1, 0], [1, 0, 0], 3));
// console.log(addBinary([1, 1, 1, 1], [1, 0, 0, 0], 4));
// console.log(addBinary([1, 1], [1, 1], 2));

/**
 * 2.2-1
 * Selection Sort - my first version
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 在第2層迴圈結束後再交換
    if (minIndex !== i) {
      // 代表最小值的index 有被更新過，交換位置。
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([])); // 空陣列
console.log(selectionSort([7])); // 單一元素
console.log(selectionSort([5, 5, 5, 5])); // 所有元素相同
console.log(selectionSort([9, 8, 7, 6, 5])); // 完全遞減序列
console.log(selectionSort([1, 2, 3, 4, 5])); // 已經排序好
console.log(selectionSort([3, -1, 0, -3, 2])); // 混合正數和負數
console.log(selectionSort([1000, -1000, 500, -500, 0]));
console.log(selectionSort([2, 3, 2, 1, 3, 1])); // 有重複值
console.log(selectionSort([10, -10, 10, -10])); // 重複的正負數
console.log(selectionSort([42, 17, 8, 99, -1, 0, 100, -42]));
