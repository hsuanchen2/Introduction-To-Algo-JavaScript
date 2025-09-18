const testCase1 = [
  47, 169, 109, 55, 7, 13, 1, 137, 131, 161, 95, 149, 89, 153, 119, 43, 59, 185,
  183, 101, 17, 197, 97, 199, 115, 37, 79, 67, 65, 41, 23, 29, 133, 157, 3, 147,
  155, 85, 181, 121, 15, 11, 191, 105, 83, 71, 61, 103, 179, 75, 69, 45, 145,
  77, 51, 165, 73, 57, 189, 129, 111, 187, 173, 151, 123, 87, 63, 159, 33, 53,
  19, 107, 175, 49, 139, 5, 167, 163, 91, 25, 27, 93, 99, 171, 141, 193, 117,
  127, 125, 31, 81, 35, 113, 143, 39, 135, 195, 9, 21, 177,
];

function heapSort(nums) {
  // 創建副本，保持純函數特性
  const arr = [...nums];
  const n = arr.length;

  // 建立 max heap - 從最後一個非葉子節點開始
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 一個個取出最大元素放到陣列末端
  for (let i = n - 1; i > 0; i--) {
    // 將最大元素（根節點）移到末端
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // 對剩餘的 heap 進行調整
    heapify(arr, i, 0);
  }

  return arr;
}

// 輔助函數：將以 i 為根的子樹調整為 max heap
function heapify(arr, heapSize, rootIndex) {
  let largest = rootIndex;
  const left = 2 * rootIndex + 1;
  const right = 2 * rootIndex + 2;

  // 找出最大的節點
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大節點不是根節點，則交換並繼續調整
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, heapSize, rootIndex);
  }
}

console.log(heapSort(testCase1));
