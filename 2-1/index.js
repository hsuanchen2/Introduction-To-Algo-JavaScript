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
      // �j�� 1 �����p�u�|�� 2 or 3, �]�N�O 10 or 11
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
    // �b��2�h�j�鵲����A�洫
    if (minIndex !== i) {
      // �N��̤p�Ȫ�index ���Q��s�L�A�洫��m�C
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

// merge sort
// [7, 3, 2, 6, 0, 1, 5, 4]
// [1, 2, 3, 4, 5]
const mergeSort = (nums) => {
  // divide, ���� base case ��}�l conquer
  if (nums.length <= 1) return nums; // ���z�פW merge sort �����Ӧ��Ű}�C�ǤJ
  const midIndex = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, midIndex);
  const rightArray = nums.slice(midIndex);
  // conquer
  return merge(mergeSort(leftArray), mergeSort(rightArray)); // [3] , [7] => [3,7]
};

// �X�֥��k�}�C�A�ñƧ�
const merge = (leftArray, rightArray) => {
  // [] , [10]
  // keep comparing the first element of each array, push the smaller one and remove it.
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(mergeSort([7, 3, 2, 6, 0, 1, 5, 4]));
console.log(mergeSort([4, 7, 1, 12, 6]));
console.log(mergeSort([-4, 7, 1, 0, 6, -11, 20, 35]));
