class MyHeap {
  constructor(heap) {
    this.maxHeap = heap === undefined ? [] : [...heap];
    this.heapify();
  }
  maxHeap;
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
    return this.maxHeap.length;
  }

  isEmpty() {
    return this.maxHeap.length === 0;
  }

  push(number) {
    this.maxHeap.push(number);
    this.siftUp(this.maxHeap.length - 1);
  }

  swap(i, j) {
    [this.maxHeap[i], this.maxHeap[j]] = [this.maxHeap[j], this.maxHeap[i]];
  }

  peek() {
    return this.maxHeap[0];
  }

  siftUp(i) {
    while (true) {
      const parentIndex = this.parent(i);
      if (parentIndex < 0 || this.maxHeap[i] <= this.maxHeap[parentIndex])
        break;
      [this.maxHeap[i], this.maxHeap[parentIndex]] = [
        this.maxHeap[parentIndex],
        this.maxHeap[i],
      ];
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
    const rootNode = this.maxHeap.pop(); // O(1)
    // sift down start
    // because it's a max heap, so the root node is definitely smaller than it's children now.
    this.siftDown(0);
    return rootNode;
  }

  // sift down from which index
  siftDown(index) {
    let currentIndex = index;
    while (true) {
      let largestIndex = currentIndex;
      const leftNodeIndex = this.left(currentIndex);
      const rightNodeIndex = this.right(currentIndex);
      // check left node
      if (
        leftNodeIndex < this.size() &&
        this.maxHeap[leftNodeIndex] > this.maxHeap[largestIndex]
      ) {
        largestIndex = leftNodeIndex;
      }

      // check right node
      if (
        rightNodeIndex < this.size() &&
        this.maxHeap[rightNodeIndex] > this.maxHeap[largestIndex]
      ) {
        largestIndex = rightNodeIndex;
      }

      // check largest index
      if (currentIndex === largestIndex) break;
      this.swap(currentIndex, largestIndex);
      currentIndex = largestIndex;
    }
  }

  heapify() {
    for (let i = this.parent(this.size() - 1); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  logHeap() {
    console.log(this.maxHeap);
  }
}

const myHeap = new MyHeap([36, 25, 33, 42, 12, 6]);
myHeap.logHeap();
