class MyHeap {
  constructor(heap) {
    this.maxHeap = heap;
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
    if (this.isEmpty) return;
    this.swap(0, this.maxHeap[this.size]);
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
      if (
        this.left(currentIndex) >= this.size ||
        this.right(currentIndex) >= this.size
      )
        break;
      if (this.maxHeap[left] > this.maxHeap[right]) {
        this.swap(currentIndex, this.left(currentIndex));
        currentIndex = this.left(currentIndex);
      } else {
        this.swap(currentIndex, this.right(currentIndex));
        currentIndex = this.right(currentIndex);
      }
    }
  }
}

const myHeap = new MyHeap([36, 25, 33, 42, 12, 6]);
