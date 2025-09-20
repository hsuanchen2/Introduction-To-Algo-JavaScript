// minheap
class MyMinHeap {
  constructor(heap) {
    this.minHeap = heap === undefined ? [] : [...heap];
    this.heapify();
  }
  minHeap;
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  size() {
    return this.minHeap.length;
  }

  isEmpty() {
    return this.minHeap.length === 0;
  }

  push(number) {
    this.minHeap.push(number);
    // maintain the heap structure
    this.siftUp(this.minHeap.length - 1);
  }

  swap(i, j) {
    [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
  }

  peek() {
    return this.minHeap[0];
  }

  siftUp(i) {
    while (true) {
      const parentIndex = this.parent(i);
      if (parentIndex < 0 || this.minHeap[i] >= this.minHeap[parentIndex])
        break;
      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  // heap 中的 pop 慣例上是指移除並回傳 heap 的頂端元素
  pop() {
    // swap the root and rightmost node
    // remove the rightmost node
    // sift-down the root node
    if (this.isEmpty()) return;
    this.swap(0, this.size() - 1);
    const rootNode = this.minHeap.pop(); // O(1)
    // sift down start
    // because it's a max heap, so the root node is definitely smaller than it's children now.
    this.siftDown(0);
    return rootNode;
  }

  // sift down from which index
  // min heap 的 sift down 邏輯會略有不同
  siftDown(index) {
    let currentIndex = index;
    while (true) {
      let smallestIndex = currentIndex;
      const leftNodeIndex = this.left(currentIndex);
      const rightNodeIndex = this.right(currentIndex);
      if (
        leftNodeIndex < this.size() &&
        this.minHeap[leftNodeIndex] < this.minHeap[smallestIndex]
      ) {
        smallestIndex = leftNodeIndex;
      }

      if (
        rightNodeIndex < this.size() &&
        this.minHeap[rightNodeIndex] < this.minHeap[smallestIndex]
      ) {
        smallestIndex = rightNodeIndex;
      }

      if (currentIndex === smallestIndex) break;
      this.swap(currentIndex, smallestIndex);
      currentIndex = smallestIndex;
    }
  }

  heapify() {
    for (let i = this.parent(this.size() - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  getHeap() {
    return this.minHeap;
  }
}

const testCase = [
  47, 169, 109, 55, 7, 13, 1, 137, 131, 161, 95, 149, 89, 153, 119, 43, 59, 185,
  183, 101, 17, 197, 97, 199, 115, 37, 79, 67, 65, 41, 23, 29, 133, 157, 3, 147,
  155, 85, 181, 121, 15, 11, 191, 105, 83, 71, 61, 103, 179, 75, 69, 45, 145,
  77, 51, 165, 73, 57, 189, 129, 111, 187, 173, 151, 123, 87, 63, 159, 33, 53,
  19, 107, 175, 49, 139, 5, 167, 163, 91, 25, 27, 93, 99, 171, 141, 193, 117,
  127, 125, 31, 81, 35, 113, 143, 39, 135, 195, 9, 21, 177,
];

// const myMinHeap = new MyMinHeap(testCase);
// myMinHeap.logHeap();

/**
 * top k problem
 * k = 5
 */

const findTopK = (arr, k) => {
  const myMinHeap = new MyMinHeap([]);
  for (let i = 0; i < arr.length; i++) {
    if (myMinHeap.size() < k) {
      myMinHeap.push(arr[i]);
    }
    if (myMinHeap.minHeap[0] < arr[i]) {
      myMinHeap.pop();
      myMinHeap.push(arr[i]);
    }
  }
  return myMinHeap.getHeap();
};

console.log(findTopK(testCase, 1));
