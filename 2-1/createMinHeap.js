// 測試
const testCase = [
  47, 169, 109, 55, 7, 13, 1, 137, 131, 161, 95, 149, 89, 153, 119, 43, 59, 185,
  183, 101, 17, 197, 97, 199, 115, 37, 79, 67, 65, 41, 23, 29, 133, 157, 3, 147,
  155, 85, 181, 121, 15, 11, 191, 105, 83, 71, 61, 103, 179, 75, 69, 45, 145,
  77, 51, 165, 73, 57, 189, 129, 111, 187, 173, 151, 123, 87, 63, 159, 33, 53,
  19, 107, 175, 49, 139, 5, 167, 163, 91, 25, 27, 93, 99, 171, 141, 193, 117,
  127, 125, 31, 81, 35, 113, 143, 39, 135, 195, 9, 21, 177,
];

/**
 * 將輸入陣列建構成符合 Min-Heap 格式的陣列
 * @param {number[]} nums - 輸入的整數陣列
 * @returns {number[]} - 符合 Min-Heap 格式的陣列
 */
function createMinHeap(nums) {
  // 創建副本，保持純函數特性
  const arr = [...nums];
  const n = arr.length;

  // 建立 min heap - 從最後一個非葉子節點開始
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }

  return arr;
}

/**
 * 輔助函數：將以 rootIndex 為根的子樹調整為 min heap
 * @param {number[]} arr - 陣列
 * @param {number} heapSize - heap 大小
 * @param {number} rootIndex - 根節點索引
 */
function minHeapify(arr, heapSize, rootIndex) {
  let smallest = rootIndex;
  const left = 2 * rootIndex + 1; // 左子節點
  const right = 2 * rootIndex + 2; // 右子節點

  // 找出最小的節點（父節點與左右子節點比較）
  if (left < heapSize && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < heapSize && arr[right] < arr[smallest]) {
    smallest = right;
  }

  // 如果最小節點不是根節點，則交換並繼續調整
  if (smallest !== rootIndex) {
    [arr[rootIndex], arr[smallest]] = [arr[smallest], arr[rootIndex]];
    // 遞歸調整被影響的子樹
    minHeapify(arr, heapSize, smallest);
  }
}
// node createMinHeap.js
console.log(createMinHeap(testCase));
